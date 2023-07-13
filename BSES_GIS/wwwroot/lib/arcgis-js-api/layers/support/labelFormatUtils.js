/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../core/Error","../../core/Logger","../../intl/date","../../intl/number","./fieldUtils","./labelUtils","../../support/arcadeOnDemand"],(function(e,r,t,n,a,l,i,o,u){"use strict";const s=n.getLogger("esri.layers.support.labelFormatUtils"),c={type:"simple",evaluate:()=>null},d={getAttribute:(e,r)=>e.field(r)};async function f(r,n,a){if(!r||!r.symbol||!n)return c;const l=r.where,i=o.getLabelExpression(r),f=l?await new Promise(((r,t)=>e(["../../core/sql/WhereClause"],r,t))):null;let g;if("arcade"===i.type){const e=await u.createLabelExpression(i.expression,a,n);if(null==e)return c;g={type:"arcade",evaluate(r){try{const t=e.evaluate({$feature:"attributes"in r?e.repurposeFeature(r):r},e.services);if(null!=t)return t.toString()}catch(n){s.error(new t("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:n,feature:r,expression:i}))}return null},needsHydrationToEvaluate:()=>null==o.getSingleFieldArcadeExpression(i.expression)}}else g={type:"simple",evaluate:e=>i.expression.replaceAll(/{[^}]*}/g,(r=>{const t=r.slice(1,-1),a=n.get(t);if(!a)return r;let l=null;if("attributes"in e){e&&e.attributes&&(l=e.attributes[a.name])}else l=e.field(a.name);return null==l?"":p(l,a)}))};if(l){let e;try{e=f.WhereClause.create(l,n)}catch(m){return s.error(new t("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:m})),c}const r=g.evaluate;g.evaluate=n=>{const a="attributes"in n?void 0:d;try{if(e.testFeature(n,a))return r(n)}catch(m){s.error(new t("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:n,error:m}))}return null}}return g}function p(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const r=+e,n="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(n<=r&&r<=a)return t.name}let n=e;return"date"===r.type||"esriFieldTypeDate"===r.type?n=a.formatDate(n,a.convertDateFormatToIntlOptions("short-date")):i.isNumericField(r)&&(n=l.formatNumber(+n)),n||""}r.createLabelFunction=f,r.formatField=p,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));