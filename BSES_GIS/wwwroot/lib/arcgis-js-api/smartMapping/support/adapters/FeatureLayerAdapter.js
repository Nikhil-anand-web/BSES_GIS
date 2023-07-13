/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/arrayUtils","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../layers/support/arcgisLayerUrl","../../../layers/support/fieldUtils","../../../rest/generateRenderer","../../../rest/support/GenerateRendererParameters","../../../rest/support/StatisticDefinition","../../../rest/support/UniqueValueDefinition","../../statistics/support/predominanceUtils","../../statistics/support/utils","../../statistics/support/WorkerClient","../utils","./InMemoryLayerAdapter","./support/utils","../../../statistics/utils"],(function(e,t,r,i,s,a,n,o,l,u,c,m,h,d,p,f,y,F,g,S,v,w,_){"use strict";const x=5,E=2e4,z=4e5;let q=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).adapterName="feature-layer-adapter",e}e._inherits(n,t);var o=n.prototype;return o._isStatsSupportedOnService=function(){const e=this.layer;if(!e.get("capabilities.query.supportsStatistics")||"multipatch"===this.geometryType&&!c.isHostedAgolService(e.url)&&e.version<10.5)throw new i(`${this.adapterName}:not-supported`,"Layer does not support statistics query");return Promise.resolve()},o._fetchFeaturesFromService=function(e,t){return this.layer.queryFeatures(e,{signal:t}).then((e=>e.features))},o._fetchFeaturesJSONFromService=function(e,t){return this._fetchFeaturesFromService(e,t).then(w.ensureFeaturesJSON)},o._summaryStatsFromGenRend=function(e){const t=e.normalizationType,r=e.normalizationField;return this.classBreaks({field:e.field,numClasses:x,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:t,normalizationField:"field"===t?r:void 0,minValue:e.minValue,maxValue:e.maxValue,filter:e.filter,signal:e.signal}).then((e=>{let t,r,i;if(e.classBreakInfos?.some((e=>(e.hasAvg&&(t=e),!!t))),t){const e=t.maxValue-t.minValue;r=t.minValue+e/2,i=4*e}const s={min:e.minValue,max:e.maxValue,avg:r,stddev:i};return _.processSummaryStatisticsResult(s)}))},o._summaryStatsFromServiceQuery=async function(e,t){await this._isStatsSupportedOnService(),"percent-of-total"===e.normalizationType&&(e.normalizationTotal=await this._getNormalizationTotal(e.field,e.normalizationType,e.filter));const r=w.getSummaryStatsQuery(this,e,t),i=await this.layer.queryFeatures(r,{signal:e.signal}),s=w.getSummaryStatisticsFromFeatureSet(i,t);return _.processSummaryStatisticsResult(s)},o._uvFromGenRenderer=function(e,t){const r=e.field??void 0,i=new f;i.attributeField=r;const s=new d;return s.classificationDefinition=i,this.generateRenderer(s,e.signal).then((e=>{const t={},i=this.getField(r);return e.uniqueValues.forEach((e=>{let r=e.value;null!=r&&""!==r&&("string"!=typeof r||""!==r.trim()&&"<null>"!==r.toLowerCase())||(r=null),null==t[r]?t[r]={count:e.count,data:m.isNumericField(i)&&r?Number(r):r}:t[r].count=t[r].count+e.count})),{count:t}})).then((r=>_.createUVResult(r,[t],e.returnAllCodedValues)))},o._uvFromServiceQuery=async function(e,t){return this._isStatsSupportedOnService().then((()=>this.layer.queryFeatures(w.getUVQuery(this,e),{signal:e.signal}))).then((t=>w.getUniqueValuesFromFeatureSet(t,{layer:this,field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:S.FIELD_DELIMITER,view:e.view,signal:e.signal}))).then((r=>_.createUVResult(r,t,e.returnAllCodedValues,S.FIELD_DELIMITER)))},o._calcBinsSQL=function(e,t,r){const i=[],s=t.length;return t.forEach(((t,a)=>{const[n,o]=t;let l=null;l=0!==a||r?a!==s-1||r?F.mergeWhereClauses(`${e} >= ${n}`,`${e} ${a===s-1?" <= ":" < "} ${o}`):`${e} >= ${n}`:`${e} < ${o}`,i.push("WHEN ("+l+") THEN "+(a+1))})),["CASE",i.join(" "),"ELSE 0","END"].join(" ")},o._getNormalizationTotal=function(e,t,r,i){return e&&"percent-of-total"===t?this.summaryStatistics({field:e,filter:r,signal:i}).then((e=>e.sum)):Promise.resolve(null)},o._getQueryParamsForExpr=function(e,t){const r=e.valueExpression||e.sqlExpression,i=e.signal;if(!r){const{field:r,normalizationType:s,normalizationField:a}=e,n=r?this.getField(r):null,o=m.isDateField(n),l={field:r,normalizationType:s,normalizationField:a,normalizationTotal:t,layer:this};return{sqlExpression:o?w.msSinceUnixEpochSQL(this,r):w.getFieldExpr(l),sqlWhere:o?null:e.sqlWhere||F.getSQLFilterForNormalization({field:r,normalizationType:s,normalizationField:a}),filter:e.filter,signal:i}}return{valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,filter:e.filter,signal:i}},o._getDataRange=function(e,t,r){return null!=t&&null!=r?Promise.resolve({min:t,max:r}):this.summaryStatistics(e).then((e=>({min:e.min,max:e.max})))},o._histogramForExpr=function(e){return this._getNormalizationTotal(e.field,e.normalizationType,e.filter,e.signal).then((t=>{const r=this._getQueryParamsForExpr(e,t);return this._getDataRange(r,e.minValue,e.maxValue).then((i=>{const s=i.min,a=i.max;if(null==s||null==a)return{bins:[],minValue:s,maxValue:a,normalizationTotal:t};const n=e.numBins||w.defaultNumBins,o=_.getEqualIntervalBins(s,a,n),l=this._calcBinsSQL(r.sqlExpression,o,null!=e.minValue&&null!=e.maxValue),u=new p({statisticType:"count",outStatisticFieldName:"countOFExpr",onStatisticField:"1"}),c=this.layer.createQuery();return c.where=F.mergeWhereClauses(c.where,r.sqlWhere),c.sqlFormat="standard",c.outStatistics=[u],c.groupByFieldsForStatistics=[l],c.orderByFields=[l],w.updateQueryWithFeatureFilter(c,e.filter),this._isStatsSupportedOnService().then((()=>this.layer.queryFeatures(c,{signal:r.signal}))).then((e=>w.getHistogramFromFeatureSet(e,s,a,n,t)))}))}))},o._binParamsFromGenRend=function(e,t){const{field:r,normalizationType:i,normalizationField:s,signal:a}=e,n=F.getSQLFilterForNormalization({field:r,normalizationType:i,normalizationField:s}),o=new d({classificationDefinition:_.createClassBreaksDefinition({field:r,normalizationType:i,normalizationField:s,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numBins||w.defaultNumBins}),where:F.mergeWhereClauses(n,t)});return this.generateRenderer(o,a).then((e=>{const{normalizationTotal:t,classBreaks:a}=e;return w.generateBinParams({field:r,normalizationType:i,normalizationField:s,normalizationTotal:t,classBreaks:a,where:n,layer:this})}))},o._classBreaksFromGenRend=function(e){const{field:t,normalizationType:r,normalizationField:i,normalizationTotal:s,signal:a}=e,n=F.getSQLFilterForNormalization({field:t,normalizationType:r,normalizationField:i}),o=w.getFieldExpr({field:t,normalizationType:r,normalizationField:i,normalizationTotal:s,layer:this}),l=F.getRangeExpr(o,e.minValue,e.maxValue),u=_.createClassBreaksDefinition({field:t,normalizationType:r,normalizationField:i,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||x}),c=new d;return c.classificationDefinition=u,c.where=F.mergeWhereClauses(n,l),this.generateRenderer(c,a).then((t=>_.resolveCBResult(t,e.classificationMethod)))},o.summaryStatistics=async function(e){const{field:t,normalizationType:r,sqlExpression:s,view:n,features:o,useFeaturesInView:l}=e,u=t?this.getField(t):null,c=m.isDateField(u),h=e.valueExpression||s,d=h&&!s,p=this._hasLocalSource||o||l,f=n&&"3d"===n.type;if(p||d)return d||o||l||f?this._summaryStatsFromMemory(e,u):this._summaryStatsFromClientQuery(e,c);if(!this.supportsSQLExpression&&(c||h||"natural-log"===r||"square-root"===r))throw new i(`${this.adapterName}:not-supported`,"Layer does not support standardized SQL expression for queries");return(r&&!this.supportsSQLExpression?this._summaryStatsFromGenRend(e):this._summaryStatsFromServiceQuery(e,c)).catch((()=>(a.throwIfAborted(e.signal),this._summaryStatsFromMemory(e,u))))},o.uniqueValues=async function(e){const{valueExpression:t,sqlExpression:r,features:i,useFeaturesInView:s,signal:n}=e,o=t&&(!r||!this.supportsSQLExpression),l=this._hasLocalSource||i||s||o,u=e.view,c=u&&"3d"===u.type,m=await w.getDomainsForFields(e,this);return l?o||i||s||c?this._uvFromMemory(e,m):this._uvFromClientQuery(e,m):this._uvFromServiceQuery(e,m).catch((t=>(a.throwIfAborted(n),!e.field||e.field2||e.field3||e.filter?t:this._uvFromGenRenderer(e,m[0])))).catch((()=>(a.throwIfAborted(n),c?this._uvFromMemory(e,m):this._uvFromClientQuery(e,m))))},o.histogram=async function(e){const{field:t,normalizationType:r,normalizationField:s,classificationMethod:a,view:n,filter:o,signal:l}=e,u=t?this.getField(t):null,c=m.isDateField(u),h=e.valueExpression||e.sqlExpression,d=h&&!e.sqlExpression,p=this._hasLocalSource||e.features||e.useFeaturesInView||d,f=this.supportsSQLExpression,y=!a||"equal-interval"===a,g=e.minValue,S=e.maxValue,v=null!=g&&null!=S,_=e.numBins||w.defaultNumBins;if(p)return this._histogramFromMemory(e);if((h||f)&&y){if(!f&&(h||"natural-log"===r||"square-root"===r))throw new i(`${this.adapterName}:not-supported`,"Layer does not support standardized SQL expression for queries");return this._histogramForExpr(e)}if(c&&y)throw new i(`${this.adapterName}:not-supported`,"Normalization and date field are not allowed when layer does not support standardized SQL expression for queries");return r||!y?this._binParamsFromGenRend(e).then((a=>{if(!v)return w.getBins(this,a,t,_,n,o,l);if(g>a.max||S<a.min)throw new i(`${this.adapterName}:insufficient-data`,"Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field");if(y)return w.getBins(this,{min:g,max:S,sqlExpr:a.sqlExpr,excludeZerosExpr:a.excludeZerosExpr},t,_,n,o,l);{const i={field:t,normalizationType:r,normalizationField:s,normalizationTotal:a.normTotal,layer:this},u=w.getFieldExpr(i),c=F.getRangeExpr(u,g,S);return this._binParamsFromGenRend(e,c).then((e=>w.getBins(this,e,t,_,n,o,l)))}})):this._histogramForField(e)},o.classBreaks=async function(e){const t=!1!==e.analyzeData,r=this._hasLocalSource||e.features||e.useFeaturesInView||e.valueExpression||e.filter;if(t&&r)return this._classBreaksFromMemory(e);return(t?this._classBreaksFromGenRend(e):this._classBreaksFromInterpolation(e)).catch((()=>(a.throwIfAborted(e.signal),this._classBreaksFromMemory(e))))},o.queryFeatureCount=async function(e){if(this._hasLocalSource)throw new i(`${this.adapterName}:not-supported`,"Layer does not support count query");const t=this.layer,r=t.createQuery();return r.where=F.mergeWhereClauses(r.where,e.whereClause),w.updateQueryWithFeatureFilter(r,e.filter),t.queryFeatureCount(r,{signal:e.signal})},o.generateRenderer=async function(e,t){const r=this.layer;if(this._hasLocalSource||r.version<10.1)throw new i(`${this.adapterName}:not-supported`,"Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)");const s=r.createQuery();return e.where=F.mergeWhereClauses(e.where,s.where),h.generateRenderer(r.parsedUrl.path,{source:r.dynamicDataSource??void 0,gdbVersion:r.gdbVersion??void 0},e,{signal:t})},o.heatmapStatistics=async function(e){const{field:t,fieldOffset:r,view:i,signal:s}=e;return(t&&null==r?this.summaryStatistics({field:t,view:i,signal:s}):Promise.resolve(null)).then((t=>{let i=r||0;if(t){const{count:e,min:r,max:s}=t;e?r===s&&0===r?i=1:s<=0?i="abs":r<0&&(i=-1.01*r):i=1}return this._heatmapStatsFromMemory(e,i).then((e=>({...e,summaryStatistics:t,fieldOffset:i})))}))},o.predominantCategories=async function(e){if(!this._hasLocalSource&&!this.supportsSQLExpression)throw new i(`${this.adapterName}:not-supported`,"Layer does not support advanced SQL expressions and standardized queries");const{fields:t,view:r,signal:s}=e,a=y.getArcadeForPredominantCategory(t),n=y.getSQLForPredominantCategoryName(t),o=r&&this._hasLocalSource?await this._uvFromMemory({valueExpression:a,view:r,signal:s}):await this._uvFromServiceQuery({sqlExpression:n.expression,valueExpression:a,signal:s});return w.getPredominantCategoriesFromUVInfos(o.uniqueValueInfos,t)},o.getSampleFeatures=async function(e,t){const{view:i,sampleSize:n,requiredFields:o,returnGeometry:l,filter:u,signal:c}=e,m=this.layer.createQuery(),h=1,d="json"===t;m.outSpatialReference=e.spatialReference||i&&i.spatialReference,m.returnGeometry=!!l,m.outFields=o,w.updateQueryWithFeatureFilter(m,u);let p=[],f=!1;if(i)try{const e=await i.whenLayerView(this.layer);if(f=!w.getMissingFields(this,o,e).length,f&&(p=await this._fetchFeaturesFromMemory(e,m,c,t),p.length&&null!=n&&n>0&&n<=p.length))return r.pickRandom(p,n,h)}catch(y){a.throwIfAborted(c)}try{if(this._hasLocalSource)return f?p:d?this._fetchFeaturesJSONFromService(m,c):this._fetchFeaturesFromService(m,c);const t=await this.queryFeatureCount({view:i,filter:u,signal:c}),a=this.layer.capabilities.query.maxRecordCount;let o=-1===n?t:n;if(o=a&&o>a?a:o,t<=p.length||p.length>=a)return p;s.assertIsSome(i,"FeatureLayerAdapter: must have a view");const l=i.extent.width/i.width/i.scale*z;if(m.maxAllowableOffset=e.resolution||l,t<=o)return d?this._fetchFeaturesJSONFromService(m,c):this._fetchFeaturesFromService(m,c);if(t<=E){const e=this.layer.createQuery();w.updateQueryWithFeatureFilter(e,u);const t=await this.layer.queryObjectIds();return m.objectIds=r.pickRandom(t,o,h),d?this._fetchFeaturesJSONFromService(m,c):this._fetchFeaturesFromService(m,c)}return this.layer.get("capabilities.query.supportsPagination")&&(m.num=Math.min(o,E)),d?this._fetchFeaturesJSONFromService(m,c):this._fetchFeaturesFromService(m,c)}catch(y){return a.throwIfAborted(c),p}},o.load=function(e){const t=this.layer.load(e).then((async t=>{this.geometryType=t.geometryType,this.objectIdField=t.objectIdField,this.supportsSQLExpression=t.get("capabilities.query.supportsSqlExpression"),this._hasLocalSource=!t.url&&!!t.source,this.hasQueryEngine=this._hasLocalSource,this.minScale=t.minScale,this.maxScale=t.maxScale,this.fullExtent=t.fullExtent,this.workerClient=g.WorkerClient.getInstance(),await this.workerClient.open(e.signal)}));return this.addResolvingPromise(t),Promise.resolve(this)},e._createClass(n)}(v);t.__decorate([n.property({constructOnly:!0})],q.prototype,"layer",void 0),q=t.__decorate([u.subclass("esri.smartMapping.support.adapters.FeatureLayerAdapter")],q);return q}));