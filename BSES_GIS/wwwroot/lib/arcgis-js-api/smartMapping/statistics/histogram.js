/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../core/Error","../../layers/support/fieldUtils","./support/utils","../support/binningUtils","../support/utils","../support/adapters/support/layerUtils"],(function(i,e,a,r,s,t){"use strict";const n=["date",...e.numericTypes];async function o(o){if(!(o&&o.layer&&(o.field||o.valueExpression||o.sqlExpression)))throw new i("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(o.valueExpression&&!o.sqlExpression&&!o.view)throw new i("histogram:missing-parameters","View is required when 'valueExpression' is specified");o.forBinning&&r.verifyBinningParams(o,"histogram");const{layer:l,...p}=o,d=o.forBinning?t.binningCapableLayerTypes:t.defaultSupportedLayerTypes,f=t.createLayerAdapter(l,d,o.forBinning);if(!f)throw new i("histogram:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(d).join(", "));const m={layerAdapter:f,...p};m.normalizationType=s.getNormalizationType(m);const u=null!=m.signal?{signal:m.signal}:null;await f.load(u);const h=m.valueExpression||m.sqlExpression,y=m.field,c=y?f.getField(y):null,w=!m.classificationMethod||"equal-interval"===m.classificationMethod,g=await s.getFieldsList({field:y,normalizationField:m.normalizationField,valueExpression:m.valueExpression}),v=a.verifyBasicFieldValidity(f,g,"histogram:invalid-parameters");if(v)throw v;if(c){const r=a.verifyFieldType(f,c,"histogram:invalid-parameters",n);if(r)throw r;if(e.isDateField(c)){if(m.normalizationType)throw new i("histogram:invalid-parameters","Normalization is not allowed for date fields");if(!w)throw new i("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields")}}else if(h){if(m.normalizationType)throw new i("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!w)throw new i("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified")}const E=a.verifyFilterValidty(m.filter,"histogram:invalid-parameters");if(E)throw E;return m}async function l(i){const{layerAdapter:e,...a}=await o(i);return e.histogram(a)}return l}));