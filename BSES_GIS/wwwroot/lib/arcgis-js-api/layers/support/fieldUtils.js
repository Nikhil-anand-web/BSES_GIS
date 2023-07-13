/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../core/Error","../../core/object","./domainUtils","../../support/arcadeOnDemand"],(function(e,i,n,t,l,r){"use strict";const o=/^([0-9_])/,a=/[^a-z0-9_\u0080-\uffff]+/gi;function s(e){if(null==e)return null;return e.trim().replaceAll(a,"_").replace(o,"F$1")||null}const d=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"];function c(e,i){if(null!=e&&null!=i)for(const n of Array.isArray(e)?e:[e])if(f(d,n,i),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)f(u,e,i)}function f(e,i,n){if(e)for(const l of e){const e=t.getDeepValue(l,i),r=e&&"function"!=typeof e&&n.get(e);r&&t.setDeepValue(l,r.name,i)}}function m(e,i){if(null!=e&&i?.fields?.length)if("startField"in e){const n=i.get(e.startField),t=i.get(e.endField);e.startField=n?.name??null,e.endField=t?.name??null}else{const n=i.get(e.startTimeField),t=i.get(e.endTimeField);e.startTimeField=n?.name??null,e.endTimeField=t?.name??null}}const p=new Set;function F(e,i){return e&&i?(p.clear(),g(p,e,i),Array.from(p).sort()):[]}function g(e,i,n){if(n)if(i?.fields?.length)if(n.includes("*"))for(const{name:t}of i.fields)e.add(t);else for(const t of n)y(e,i,t);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const i of n)null!=i&&e.add(i)}}function y(e,i,n){if("string"==typeof n)if(i){const t=i.get(n);t&&e.add(t.name)}else e.add(n)}function I(e,i){return null==i||null==e?[]:i.includes("*")?(e.fields??[]).map((e=>e.name)):i}function b(e,i,n=1){if(!i||!e)return[];if(i.includes("*"))return["*"];const t=F(e,i);return t.length/e.fields.length>=n?["*"]:t}async function T(e,i,n){if(!n)return;const{arcadeUtils:t}=await r.loadArcade(),l=t.extractFieldNames(n,i?.fields?.map((e=>e.name)));for(const r of l)y(e,i,r)}async function E(i,t,l){if(l&&"1=1"!==l){const{WhereClause:r}=await new Promise(((i,n)=>e(["../../core/sql/WhereClause"],i,n))),o=r.create(l,t);if(!o.isStandardized)throw new n("fieldUtils:collectFilterFields","Where clause is not standardized",{where:l});g(i,t,o.fieldNames)}}function x({displayField:e,fields:i}){return e||(i&&i.length?h(i,"name-or-title")||h(i,"unique-identifier")||h(i,"type-or-category")||w(i):null)}function w(e){for(const i of e){if(!i||!i.name)continue;const e=i.name.toLowerCase();if(e.includes("name")||e.includes("title"))return i.name}return null}function h(e,i){for(const n of e)if(n&&n.valueType&&n.valueType===i)return n.name;return null}async function V(e){if(!e)return[];const i=new Set;return await N(i,e),Array.from(i).sort()}async function N(e,i){if(!i)return;const n=i.elevationInfo?.featureExpressionInfo;return n?n.collectRequiredFields(e,i.fieldsIndex):void 0}function v(e,i,n){n.onStatisticExpression?T(e,i,n.onStatisticExpression.expression):e.add(n.onStatisticField)}async function _(e,i,n){if(!i||!n||!("fields"in n))return;const t=[],l=n.popupTemplate;t.push(A(e,i,l)),n.fields&&t.push(...n.fields.map((async n=>v(e,i.fieldsIndex,n)))),await Promise.all(t)}async function A(e,i,n){const t=[];n?.expressionInfos&&t.push(...n.expressionInfos.map((n=>T(e,i.fieldsIndex,n.expression))));const l=n?.content;if(Array.isArray(l))for(const r of l)"expression"===r.type&&r.expressionInfo&&t.push(T(e,i.fieldsIndex,r.expressionInfo.expression));await Promise.all(t)}async function S(e,i,n){i&&(i.timeInfo&&null!=n&&n.timeExtent&&g(e,i.fieldsIndex,[i.timeInfo.startField,i.timeInfo.endField]),i.floorInfo&&g(e,i.fieldsIndex,[i.floorInfo.floorField]),null!=n&&null!=n.where&&await E(e,i.fieldsIndex,n.where))}async function D(e,i,n){i&&n&&await Promise.all(n.map((n=>$(e,i,n))))}async function $(e,i,n){i&&n&&(n.valueExpression?await T(e,i.fieldsIndex,n.valueExpression):n.field&&y(e,i.fieldsIndex,n.field))}async function L(e){if(!e)return[];const i="timeInfo"in e&&e.timeInfo;return i?F(e.fieldsIndex,[e.trackIdField,i.startField,i.endField]):[]}function R(e){return e?F(e.fieldsIndex,z(e)):[]}function O(e){if(!e)return[];const i=e.geometryFieldsInfo;return i?F(e.fieldsIndex,[i.shapeAreaField,i.shapeLengthField]):[]}const C=["oid","global-id","guid"],k=["oid","global-id"],P=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i];function U(e){const i=new Set;M(e).forEach((e=>i.add(e))),O(e).forEach((e=>i.add(e.toLowerCase())));const n=e&&"infoFor3D"in e?e.infoFor3D:void 0;return n&&(Object.values(n.assetMapFieldRoles).forEach((e=>i.add(e.toLowerCase()))),Object.values(n.transformFieldRoles).forEach((e=>i.add(e.toLowerCase())))),Array.from(i)}function z(e){if(!e)return[];const i="editFieldsInfo"in e&&e.editFieldsInfo;if(!i)return[];const{creationDateField:n,creatorField:t,editDateField:l,editorField:r}=i;return[n,t,l,r].filter(Boolean)}function M(e){return z(e).map((e=>e.toLowerCase()))}function j(e,i){return e.editable&&!C.includes(e.type)&&!M(i).includes(e.name?.toLowerCase()??"")}function G(e,i){const n=e.name?.toLowerCase()??"";return!(null!=i?.objectIdField&&n===i.objectIdField.toLowerCase()||null!=i?.globalIdField&&n===i.globalIdField.toLowerCase()||U(i).includes(n)||k.includes(e.type)||P.some((e=>e.test(n))))}async function q(e){if(!e)return[];const i=new Set;return await B(i,e),Array.from(i).sort()}async function B(e,i){const{labelingInfo:n,fieldsIndex:t}=i;n&&n.length&&await Promise.all(n.map((i=>W(e,t,i))))}async function W(e,i,n){if(!n)return;const t=n.getLabelExpression(),l=n.where;if("arcade"===t.type)await T(e,i,t.expression);else{const n=t.expression.match(/{[^}]*}/g);n&&n.forEach((n=>{y(e,i,n.slice(1,-1))}))}await E(e,i,l)}function X(e){const i=e.defaultValue;return void 0!==i&&ie(e,i)?i:e.nullable?null:void 0}function Y(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function H(e){return null===e||Y(e)}const J="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function K(e){return null===e||J(e)}function Q(e){return null!=e&&"string"==typeof e}function Z(e){return null===e||Q(e)}function ee(){return!0}function ie(e,i){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?K:J;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?H:Y;break;case"string":case"esriFieldTypeString":n=e.nullable?Z:Q;break;default:n=ee}return 1===arguments.length?n:n(i)}const ne=["integer","small-integer","single","double"],te=new Set([...ne,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),le=["date","date-only","time-only","timestamp-offset"],re=new Set([...le,"esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function oe(e){return null!=e&&te.has(e.type)}function ae(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function se(e){return null!=e&&re.has(e.type)}function de(e,i){return null===ce(e,i)}function ue(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function ce(e,n){return null==e||e.nullable&&null===n?null:oe(e)&&!fe(e.type,Number(n))?i.NumericRangeValidationError.OUT_OF_RANGE:ie(e,n)?e.domain?l.validateDomainValue(e.domain,n):null:i.TypeValidationError.INVALID_TYPE}function fe(e,i){const n="string"==typeof e?pe(e):e;if(!n)return!1;const t=n.min,l=n.max;return n.isInteger?J(i)&&i>=t&&i<=l:i>=t&&i<=l}function me(e){const i=l.getDomainRange(e.domain);return i||(oe(e)?pe(e.type):void 0)}function pe(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return ge;case"esriFieldTypeInteger":case"integer":return ye;case"esriFieldTypeBigInteger":case"big-integer":return Ie;case"esriFieldTypeSingle":case"single":return be;case"esriFieldTypeDouble":case"double":return Te}}function Fe(e){if(!Y(e))return null;if(J(e)){if(e>=ge.min&&e<=ge.max)return"esriFieldTypeSmallInteger";if(e>=ye.min&&e<=ye.max)return"esriFieldTypeInteger"}return e>=be.min&&e<=be.max?"esriFieldTypeSingle":"esriFieldTypeDouble"}i.NumericRangeValidationError=void 0,(i.NumericRangeValidationError||(i.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",i.TypeValidationError=void 0,(i.TypeValidationError||(i.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";const ge={min:-32768,max:32767,isInteger:!0},ye={min:-2147483648,max:2147483647,isInteger:!0},Ie={min:-Number.MAX_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,isInteger:!0},be={min:-34e37,max:12e37,isInteger:!1},Te={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Ee(e,n,t){switch(e){case l.DomainValidationError.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case l.DomainValidationError.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case i.TypeValidationError.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case i.NumericRangeValidationError.OUT_OF_RANGE:{const{min:e,max:i}=pe(n.type);return`Value ${t} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${i}`}}}function xe(e,i){return!we(e,i,null)}function we(e,i,n){if(!i||!i.attributes||!e){if(null!=n)for(const i of e??[])n.add(i);return!0}const t=i.attributes;let l=!1;for(const r of e)if(!(r in t)){if(l=!0,null==n)break;n.add(r)}return l}async function he(e,i){const n=new Set;for(const t of i)await T(n,e.fieldsIndex,t);return Array.from(n).sort()}function Ve(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some((i=>e.toLowerCase().startsWith(i)))}i.bigIntegerRange=Ie,i.collectArcadeFieldNames=T,i.collectElevationFields=N,i.collectFeatureReductionFields=_,i.collectField=y,i.collectFields=g,i.collectFilterFields=S,i.collectLabelingFields=B,i.collectOrderByInfos=D,i.collectPopupTemplateFields=A,i.dateTypes=le,i.doubleRange=Te,i.featureHasFields=xe,i.fixFields=F,i.fixRendererFields=c,i.fixTimeInfoFields=m,i.getDisplayFieldName=x,i.getEditTrackingFields=z,i.getElevationFields=V,i.getExpressionFields=he,i.getFeatureEditFields=R,i.getFeatureGeometryFields=O,i.getFieldDefaultValue=X,i.getFieldRange=me,i.getLabelingFields=q,i.getLowerCaseDefaultHiddenFields=U,i.getLowerCaseEditTrackingFields=M,i.getNumericTypeForValue=Fe,i.getTimeFields=L,i.integerRange=ye,i.isDateField=se,i.isFieldEditable=j,i.isFieldVisibleByDefault=G,i.isNumberInRange=fe,i.isNumericField=oe,i.isRasterPixelValueField=Ve,i.isStringField=ae,i.isValidFieldValue=de,i.isValueMatchingFieldType=ie,i.normalizeFieldName=s,i.numericTypes=ne,i.packFields=b,i.populateMissingFields=we,i.rendererFields=d,i.sanitizeNullFieldValue=ue,i.singleRange=be,i.smallIntegerRange=ge,i.unpackFieldNames=I,i.validateFieldValue=ce,i.validationErrorToString=Ee,i.visualVariableFields=u,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
