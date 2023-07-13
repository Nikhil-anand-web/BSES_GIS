/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/arrayUtils","../../core/Logger","../../core/MapUtils","../../intl/date","./numberUtils","../visualVariables/support/ColorStop","../../symbols/support/utils","../../widgets/Legend/support/colorRampUtils","../../widgets/Legend/support/heatmapRampUtils"],(function(e,t,l,o,a,n,i,r,s,u){"use strict";const f=l.getLogger("esri.renderers.support.utils"),m={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%",ld:"–"},d={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},c={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"},p=a.convertDateFormatToIntlOptions("short-date");async function y(e,t,l){o.getOrCreateMapValue(e,t,(()=>[])).push(...l)}async function g(e){const l=new Map;if(!e)return l;if("visualVariables"in e&&e.visualVariables){const t=e.visualVariables.filter((e=>"color"===e.type));for(const e of t){const t=(await s.getRampStops(e)??[]).map((e=>e.color));await y(l,e.field||e.valueExpression,t)}}if("heatmap"===e.type){const t=u.getHeatmapRampStops(e).map((e=>e.color));await y(l,e.field||e.valueExpression,t)}else if("pie-chart"===e.type){for(const t of e.attributes)await y(l,t.field||t.valueExpression,[t.color]);await y(l,"default",[e?.othersCategory?.color,r.getColorFromSymbol(e.backgroundFillSymbol,null)])}else if("dot-density"===e.type){for(const t of e.attributes)await y(l,t.field||t.valueExpression,[t.color]);await y(l,"default",[e.backgroundColor])}else if("unique-value"===e.type)if("predominance"===e.authoringInfo?.type)for(const t of e.uniqueValueInfos??[])await y(l,t.value.toString(),[r.getColorFromSymbol(t.symbol,null)]);else{const t=(e.uniqueValueInfos??[]).map((e=>r.getColorFromSymbol(e.symbol,null))),{field:o,field2:a,field3:n,valueExpression:i}=e;(o||i)&&await y(l,o||i,t),a&&await y(l,a,t),n&&await y(l,n,t)}else if("class-breaks"===e.type){const t=e.classBreakInfos.map((e=>r.getColorFromSymbol(e.symbol,null))),{field:o,valueExpression:a}=e;await y(l,o??a,t)}else"simple"===e.type&&await y(l,"default",[r.getColorFromSymbol(e.symbol,null)]);return"defaultSymbol"in e&&e.defaultSymbol&&await y(l,"default",[r.getColorFromSymbol(e.defaultSymbol,null)]),l.forEach(((e,o)=>{const a=t.unique(e.filter(Boolean),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));l.set(o,a)})),l}async function b(e,t,l){const a=o.getOrCreateMapValue(e,t,(()=>new Map));for(const o of l)a.set(o.value,o.color)}async function h(e){const t=new Map;if(!e)return t;if("unique-value"!==e.type||e.authoringInfo?.type)if("class-breaks"===e.type){const l=e.classBreakInfos.map((e=>({value:e.minValue,color:r.getColorFromSymbol(e.symbol,null)}))).reverse(),{field:o,valueExpression:a}=e;await b(t,o??a,l)}else"simple"===e.type&&await b(t,"default",[{value:"default",color:r.getColorFromSymbol(e.symbol,null)}]);else{const l=(e.uniqueValueInfos??[]).map((e=>({value:e.value,color:r.getColorFromSymbol(e.symbol,null)}))),{field:o,field2:a,field3:n,valueExpression:i,fieldDelimiter:s}=e,u=[o,a,n].filter(Boolean).join(s||"");(u||i)&&await b(t,u||i,l)}if("defaultSymbol"in e&&e.defaultSymbol&&await b(t,"default",[{value:"default",color:r.getColorFromSymbol(e.defaultSymbol,null)}]),"visualVariables"in e&&e.visualVariables){const l=e.visualVariables.filter((e=>"color"===e.type));for(const e of l){const l=await s.getRampStops(e)??[];await b(t,e.field||e.valueExpression,l)}}return t}function v(e,t,l){let o="";return 0===t?o=m.lt+" ":t===l&&(o=m.gt+" "),o+e}function F(e){const{values:t,colors:l,labelIndexes:o,isDate:r,dateFormatOptions:s}=e;return t.map(((e,u)=>{let f=null;if(!o||o.includes(u)){let l;l=r?a.formatDate(e,s):n.format(e),l&&(f=v(l,u,t.length-1))}return new i({value:e,color:l[u],label:f})}))}function S(e){let t=e.minValue,l=e.maxValue;const o=e.isFirstBreak?"":m.gt+" ",a="percent-of-total"===e.normalizationType?m.pct:"";return t=null==t?"":n.format(t),l=null==l?"":n.format(l),o+t+a+" "+m.ld+" "+l+a}function V(e){const t=e.classBreakInfos,l=e.normalizationType;let o=[];if(t&&t.length)if("standard-deviation"!==e.classificationMethod)if(e.round){o.push(t[0].minValue);for(const e of t)o.push(e.maxValue);o=n.round(o),t.forEach(((e,t)=>{e.label=S({minValue:0===t?o[0]:o[t],maxValue:o[t+1],isFirstBreak:0===t,normalizationType:l})}))}else t.forEach(((e,t)=>{e.label=S({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===t,normalizationType:l})}));else f.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.")}function w(e){const t=e.map((e=>new Date(e))),l=t.length;let o=1/0,a=null;for(let n=0;n<l-1;n++){const e=t[n];let i=1/0,r=null;for(let o=n+1;o<l;o++){const l=t[o],a=(e.getFullYear()!==l.getFullYear()?"year":e.getMonth()!==l.getMonth()&&"month")||e.getDate()!==l.getDate()&&"day"||e.getHours()!==l.getHours()&&"hour"||e.getMinutes()!==l.getMinutes()&&"minute"||e.getSeconds()!==l.getSeconds()&&"second"||"millisecond",n=d[a];n<i&&(i=n,r=a)}i<o&&(o=i,a=r)}return a}function x(e){const{value:t,domain:l,fieldInfo:o,dateFormatInterval:i}=e;let r=String(t);const s=l&&"codedValues"in l&&l.codedValues?l.getName(t):null;return s?r=s:"number"==typeof t&&(r=o&&"date"===o.type?a.formatDate(t,i&&a.convertDateFormatToIntlOptions(c[i])):n.format(t)),r}function C(e,t){return"normalizationField"in e&&e.normalizationField?z(e.field,e.normalizationField):"field"in e&&e.field?E(e.field):"valueExpression"in e&&e.valueExpression?I(e.valueExpression,e.valueExpressionTitle,t):null}function E(e){return{type:"field",field:e}}function z(e,t){return{type:"normalized-field",field:e,normalizationField:t}}function I(e,t,l){return{type:"expression",expression:e,title:t,returnType:l}}function k(e,l){const o=[];if("class-breaks"===e.type||"heatmap"===e.type)o.push(C(e,"number"));else if("unique-value"===e.type){const t=e.authoringInfo;if(t&&"relationship"===t.type){if(t.field1&&t.field2){const e=t.field1.field,l=t.field2.field,a=t.field1.normalizationField,n=t.field2.normalizationField;o.push(C({field:e,normalizationField:a})),o.push(C({field:l,normalizationField:n}))}}else{const t=e.uniqueValueInfos?.[0];let l=null;if(t&&t.value){const t=typeof e.uniqueValueInfos[0].value;"string"!==t&&"number"!==t||(l=t)}o.push(C(e,l)),[e.field2,e.field3].forEach((e=>e&&o.push(E(e))))}}else"attributes"in e&&e.attributes?.forEach((e=>o.push(C(e,"number"))));const a=l?l(e):"visualVariables"in e?e.visualVariables:null;return a&&a.forEach((e=>o.push(C(e,"number")))),t.unique(o.filter(t.isSome),((e,t)=>"field"===e.type&&"field"===t.type?e.field===t.field:"normalized-field"===e.type&&"normalized-field"===t.type?e.field===t.field&&e.normalizationField===t.normalizationField:"expression"===e.type&&"expression"===t.type&&e.expression===t.expression))}e.calculateDateFormatInterval=w,e.createClassBreakLabel=S,e.createColorStops=F,e.createUniqueValueLabel=x,e.getAttribute=C,e.getAttributes=k,e.getColorsForRendererValues=h,e.getColorsFromRenderer=g,e.setLabelsForClassBreaks=V,e.timelineDateFormatOptions=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
