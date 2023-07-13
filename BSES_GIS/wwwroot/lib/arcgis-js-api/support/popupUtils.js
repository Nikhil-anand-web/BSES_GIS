/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../PopupTemplate","../layers/support/fieldUtils","../popup/content/AttachmentsContent","../popup/content/Content","../popup/content/CustomContent","../popup/content/ExpressionContent","../popup/content/FieldsContent","../popup/content/MediaContent","../popup/content/RelationshipContent","../popup/content/TextContent","../popup/FieldInfo","../popup/support/FieldInfoFormat"],(function(e,t,n,i,o,l,a,s,r,u,p,c,d){"use strict";function f({displayField:e,editFieldsInfo:n,fields:i,objectIdField:o,title:l},a){if(!i)return null;const s=y({editFieldsInfo:n,fields:i,objectIdField:o},a);if(!s.length)return null;const r=h({titleBase:l,fields:i,displayField:e}),u=v();return new t({title:r,content:u,fieldInfos:s})}function m(e){const{fields:n,featureReduction:i,title:o}=e,l=i.fields;if(!l)return null;const a=C(l,n??[]);if(!a.length)return null;const s=T();return new t({title:o,content:s,fieldInfos:a})}const F=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):n.isFieldVisibleByDefault(e,t);function b(e,t){const n=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===n&&(e=e.slice()),e.sort(w),e}function w(e,t){return"oid"===e.type?-1:"oid"===t.type?1:N(e)?-1:N(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function g(e,t){return new s({fieldInfos:y(e,t).filter((e=>e.visible))})}function y(e,t){const i=t?.visibleFieldNames;return b(e.fields??[],t?.ignoreFieldTypes||x).map((t=>new c({fieldName:t.name,isEditable:n.isFieldEditable(t,e),label:t.alias,format:S(t),visible:F(t,{...e,visibleFieldNames:i})})))}function C(e,t){return e.map((e=>new c({fieldName:e.name,isEditable:!1,label:e.alias,format:I(e,t),visible:!0})))}function I(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return S(e)}return"number"===i?.returnType?new d({digitSeparator:!0,places:2}):"count"===o?new d({digitSeparator:!0,places:0}):null}function S(e){switch(e.type){case"small-integer":case"integer":case"single":return new d({digitSeparator:!0,places:0});case"double":return new d({digitSeparator:!0,places:2});case"date":return new d({dateFormat:"long-month-day-year"});default:return"string"===e.type&&n.isRasterPixelValueField(e.name)?new d({digitSeparator:!0,places:0}):null}}function v(){return[new s,new i]}function T(){return[new s]}function h(e){const t=n.getDisplayFieldName(e),{titleBase:i}=e;return t?`${i}: {${t.trim()}}`:i??""}function N(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())}const x=["geometry","blob","raster","guid","xml"];e.createFieldInfos=y,e.createFieldsContent=g,e.createPopupTemplate=f,e.createPopupTemplateForFeatureReduction=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
