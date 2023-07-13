/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../support/arcadeOnDemand","../../support/basemapUtils"],(function(e,t,r){"use strict";const a=",",i={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","arcgis-light-gray","arcgis-navigation","arcgis-streets","arcgis-streets-relief","arcgis-topographic","arcgis-oceans","osm-standard","osm-standard-relief","osm-streets","osm-streets-relief","osm-light-gray","arcgis-terrain","arcgis-charted-territory","arcgis-community","arcgis-colored-pencil","arcgis-modern-antique","arcgis-midcentury","arcgis-newspaper","arcgis-hillshade-light"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","arcgis-imagery","arcgis-imagery-standard","arcgis-dark-gray","arcgis-navigation-night","arcgis-streets-night","osm-dark-gray","arcgis-nova","arcgis-hillshade-dark"]},n="percent-of-total",s="field",o={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},l=["integer","small-integer"];let g=null;async function c(e){const{field:r,field2:a,field3:i,normalizationField:n,valueExpression:s}=e;let o=[];if(s){if(!g){const{arcadeUtils:e}=await t.loadArcade();g=e}o=g.extractFieldNames(s)}return r&&o.push(r),a&&o.push(a),i&&o.push(i),n&&o.push(n),o}function u(e){let t=e.normalizationType;return t||(e.normalizationField?t=s:null!=e.normalizationTotal&&(t=n)),t??void 0}function d(e){return String(e).padStart(2,"0")}function f(e,t,r){let a;if("date"===t||"number"===t){"number"===t&&(e=new Date(e));a=`TIMESTAMP'${r?e.getFullYear():e.getUTCFullYear()}-${d((r?e.getMonth():e.getUTCMonth())+1)}-${d(r?e.getDate():e.getUTCDate())} ${d(r?e.getHours():e.getUTCHours())}:${d(r?e.getMinutes():e.getUTCMinutes())}:${d(r?e.getSeconds():e.getUTCSeconds())}'`}else a=e;return a}function p(e,t,r,a){const{hasQueryEngine:i}=e;let n=`(${f(r,m(e,r),i)} - ${f(t,m(e,t),i)})`;i&&(n=`(${n} * ${o.milliseconds})`);let s=o[a],l="/";s<1&&(s=1/s,l="*");return{sqlExpression:1===s?n:`(${n} ${l} ${s})`,sqlWhere:null}}function m(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const r=e.getField(t);if("<now>"===t.toLowerCase())return;if(r&&"date"===r.type)return"field"}}function y(e,t=i){for(const r in t)if(t[r].includes(e))return r}function h(e,t,a=!0){let i=null;return e&&("string"==typeof e?t.includes(e)&&(i=e):i=r.getWellKnownBasemapId(e)),a?i||"gray":i}function T(e,t){const r=t&&e.getField(t);return!!r&&l.includes(r.type)}function v(e){return`cast(${e} as float)`}e.FIELD_DELIMITER=a,e.castIntegerFieldToFloat=v,e.defaultBasemapGroups=i,e.getBasemapGroup=y,e.getBasemapId=h,e.getDateDiffSQL=p,e.getDateType=m,e.getFieldsList=c,e.getNormalizationType=u,e.isIntegerField=T,e.unitValueInDays=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));