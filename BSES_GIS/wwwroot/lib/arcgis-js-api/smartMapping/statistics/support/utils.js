/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../core/Error","../../../core/screenUtils","../../../geometry/SpatialReference","../../../geometry/support/quantizationUtils","../../../geometry/support/spatialReferenceUtils","../../../layers/support/fieldUtils","../../../renderers/support/heatmapUtils","../../../statistics/utils","../../../support/arcadeOnDemand","../../../geometry/Point"],(function(e,t,n,i,r,l,s,o,a,u,c,f){"use strict";let d=null;function p(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function m(e,t,n,i){const r=s.isWrappable(n)?s.getInfo(n):null,o=r?Math.round((r.valid[1]-r.valid[0])/t.scale[0]):null;return e.map((e=>{const n=new f(e.geometry);return l.quantizePoint(t,n,n,n.hasZ,n.hasM),e.geometry=r?p(n,o??0,i[0]):n,e}))}function y(e,t=18,n,r,l,s){const o=new Float64Array(l*s);t=Math.round(i.pt2px(t));let u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,f=0,d=0,p=0,m=0;const y=a.createValueFunction(r,n);for(const{geometry:i,attributes:g}of e){const{x:e,y:n}=i,r=Math.max(0,e-t),h=Math.max(0,n-t),$=Math.min(s,n+t),F=Math.min(l,e+t),I=+y(g);for(let i=h;i<$;i++)for(let s=r;s<F;s++){const r=i*l+s,y=a.evaluateDensityKernel(s-e,i-n,t),h=o[r];f=o[r]+=y*I;const g=f-h;d+=g,p+=g*g,f<u&&(u=f),f>c&&(c=f),m++}}if(!m)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const h=(c-u)/2;return{mean:d/m,stdDev:Math.sqrt((p-d*d/m)/m),min:u,max:c,mid:h,count:m}}async function h(e,t){if(!t)return[];const{field:n,field2:i,field3:l,fieldDelimiter:s}=e,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,p=e.normalizationTotal,m=[],y=e.viewInfoParams;let h=null,g=null;if(o){if(!d){const{arcadeUtils:e}=await c.loadArcade();d=e}d.hasGeometryOperations(o)&&await d.enableGeometryOperations(),h=d.createFunction(o),g=y&&d.getViewInfo({viewingMode:y.viewingMode,scale:y.scale,spatialReference:new r(y.spatialReference)})}const $=e.fieldInfos,F=!(t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass)&&$?{fields:$}:null;return t.forEach((e=>{const t=e.attributes;let r;if(o){const t=F?{...e,layer:F}:e,n=d.createExecContext(t,g);r=d.executeFunction(h,n)}else t&&(r=t[n],i&&(r=`${u.processNullValue(r)}${s}${u.processNullValue(t[i])}`,l&&(r=`${r}${s}${u.processNullValue(t[l])}`)));if(a&&"number"==typeof r&&isFinite(r)){const e=t&&parseFloat(t[f]);r=u.getNormalizedValue(r,a,e,p)}m.push(r)})),m}function g(e){const t=e.field,n=e.normalizationType,i=e.normalizationField;let r;return"field"===n?r="(NOT "+i+" = 0)":"log"!==n&&"natural-log"!==n&&"square-root"!==n||(r=`(${t} > 0)`),r}function $(e,t,n){const i=null!=t?e+" >= "+t:"",r=null!=n?e+" <= "+n:"";let l="";return l=i&&r?x(i,r):i||r,l?"("+l+")":""}function F(e,t,i,r){let l;return t?t.name!==e.objectIdField&&r.includes(t.type)||(l=new n(i,"'field' should be one of these types: "+r.join(","))):l=new n(i,"'field' is not defined in the layer schema"),l}function I(e,t,i){let r;return t?t.name!==e.objectIdField&&o.isNumericField(t)||(r=new n(i,"'field' should be one of these numeric types: "+o.numericTypes.join(","))):r=new n(i,"'field' is not defined in the layer schema"),r}function x(e,t){let n=null!=e?e:"";return null!=t&&t&&(n=n?"("+n+") AND ("+t+")":t),n}function v(e,t){if(e&&"intersects"!==e.spatialRelationship)return new n(t,"Only 'intersects' spatialRelationship is supported for featureFilter")}function b(e,t,i){const r=N({layer:e,fields:t});if(r.length)return new n(i,"Unknown fields: "+r.join(", ")+". You can only use fields defined in the layer schema");const l=w({layer:e,fields:t});return l.length?new n(i,"Unsupported fields: "+l.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function N(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function w(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsStatistics}))}function E(e,t,n){const i=[],r=[],l=[],s=[],o=[];e.forEach(((e,t)=>{const a=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(o.push(u),r.push(`var ${a}${t} = Number($feature["${u}"]);`)):(i.push(`function getValueForExpr${t}() {\n  ${u} \n}`),r.push(`var ${a}${t} = Number(getValueForExpr${t}());`)),n||l.push(`${a}${t} = IIf(${a}${t} < 0, 0, ${a}${t});`),s.push(`${a}${t}`)}));let a="return sum;";const u=i.length?null:o.reduce(((e,t)=>`${e} + ${t}`));let c=null;t||n?t?n||(a="return IIf(sum >= 0, sum, null);",u&&(c=`(( ${u} ) >= 0)`)):(a="return IIf(sum != 0, sum, null);",u&&(c=`(( ${u} ) <> 0)`)):(a="return IIf(sum > 0, sum, null);",u&&(c=`(( ${u} ) > 0)`));return{valueExpression:[i.length?i.join("\n"):"",r.join("\n"),l.join("\n"),`var sum = ${s.join(" + ")};`,a].filter(Boolean).join("\n\n"),sqlExpression:u,sqlWhere:c}}e.calculateHeatmapStats=y,e.getDataValues=h,e.getRangeExpr=$,e.getSQLFilterForNormalization=g,e.getSumOfAttributesExpr=E,e.mergeWhereClauses=x,e.quantizeFeatures=m,e.verifyBasicFieldValidity=b,e.verifyFieldType=F,e.verifyFilterValidty=v,e.verifyNumericField=I,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
