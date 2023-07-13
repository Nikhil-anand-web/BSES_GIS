/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","../../../request","../../Attachment","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../support/stats","../../../core/MD5","../../../kernel","../../../geometry/support/jsonUtils","../../../layers/FeatureLayer","../../../rest/query/executeQuery","../../../config","../../../core/arrayUtils","../../../core/has","../../../core/urlUtils","../../../rest/query/support/AttachmentInfo","../../../rest/support/AttachmentQuery","../../../rest/query/executeForCount","../../../geometry","../../../geometry/support/normalizeUtils","../../../core/Error","../../../core/pbf","../../../core/unitUtils","../../../geometry/support/spatialReferenceUtils","../../../rest/support/Query","../../../rest/query/executeForIds","../../../rest/query/executeQueryJSON","../../../layers/graphics/featureConversionUtils","../../../rest/support/FeatureSet","../../../rest/support/RelationshipQuery","../../../rest/support/TopFeaturesQuery","../../../rest/support/StatisticDefinition","../../Dictionary","../support/errorsupport","../../../layers/SubtypeGroupLayer"],(function(e,t,i,r,s,a,n,l,o,u,c,d,h,p,y,f,_,g,m,S,F,R,w,b,D,I,x,C,T,k,v,P,q,O,E,U,Q,G){"use strict";let B=function(s){function y(e){var t;return(t=s.call(this,e)||this).declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic",t._removeGeometry=!1,t._overrideFields=null,t.formulaCredential=null,t._pageJustIds=!1,t._requestStandardised=!1,t._useDefinitionExpression=!0,t._cachedDateMetaData={},e.spatialReference&&(t.spatialReference=e.spatialReference),t._transparent=!0,t._maxProcessing=1e3,t._layer=e.layer,t._wset=null,void 0!==e.outFields&&(t._overrideFields=e.outFields),void 0!==e.includeGeometry&&(t._removeGeometry=!1===e.includeGeometry),t}e._inherits(y,s);var f=y.prototype;return f._maxQueryRate=function(){return n.defaultMaxRecords},f.end=function(){return this._layer},f.optimisePagingFeatureQueries=function(e){this._pageJustIds=e},f.convertQueryToLruCacheKey=function(e){const t=this.urlQueryPath+","+n.stableStringify(e.toJSON());return u.createMD5Hash(t,u.outputTypes.String)},f.loadImpl=async function(){return!0===this._layer.loaded?(this._initialiseFeatureSet(),this):(await this._layer.load(),this._initialiseFeatureSet(),this)},f._initialiseFeatureSet=function(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0),this.hasZ=!0===this._layer?.capabilities?.data?.supportsZ,this.hasM=!0===this._layer?.capabilities?.data?.supportsM,null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{const e=[],t=[];for(const i of this.fields)if("oid"===i.type)e.push(i),t.push(i.name);else for(const r of this._overrideFields)if(r.toLowerCase()===i.name.toLowerCase()){e.push(i),t.push(i.name);break}this.fields=e,this._overrideFields=t}if(this._layer.source&&this._layer.source.sourceJSON){const e=this._layer.source.sourceJSON.currentVersion;!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=n.FeatureServiceDatabaseType.StandardisedNoInterval,null!=e&&e>=10.61&&(this._databaseType=n.FeatureServiceDatabaseType.Standardised)):null!=e&&(e>=10.5&&(this._databaseType=n.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),e>=10.61&&(this._databaseType=n.FeatureServiceDatabaseType.Standardised))}this.objectIdField=this._layer.objectIdField;for(const e of this.fields)"global-id"===e.type&&(this.globalIdField=e.name);this._layer instanceof G?(this.typeIdField=this._layer.subtypeField??"",this.types=this._layer.subtypes):(this.typeIdField=this._layer.typeIdField??"",this.types=this._layer.types)},f._isInFeatureSet=function(){return n.IdState.InFeatureSet},f._refineSetBlock=async function(e){return e},f._candidateIdTransform=function(e){return e},f._getSet=async function(e){if(null===this._wset){await this._ensureLoaded();const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,t}return this._wset},f._runDatabaseProbe=async function(e){await this._ensureLoaded();const t=new C;this.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t.where=e.replace("OBJECTID",this._layer.objectIdField);try{return await this._layer.queryObjectIds(t),!0}catch(i){return!1}},f._canUsePagination=function(){return!(!this._layer.capabilities||!this._layer.capabilities.query||!0!==this._layer.capabilities.query.supportsPagination)},f._cacheableFeatureSetSourceKey=function(){return this._layer.url},f.pbfSupportedForQuery=function(e){const t=this._layer?.capabilities?.query;return!e.outStatistics&&!0===t?.supportsFormatPBF&&!0===t?.supportsQuantizationEditMode},f.queryPBF=async function(e){return e.quantizationParameters={mode:"edit"},(await p.executeQuery(this._layer.parsedUrl,e,{format:"pbf"},{})).unquantize()},f.nativeCapabilities=function(){return{title:this._layer.title??"",source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}},f.executeQuery=function(e,t){e.returnZ=this.hasZ,e.returnM=this.hasM;const i="execute"===t?k.executeQueryJSON:"executeForCount"===t?F.executeForCount:T.executeForIds,r="execute"===t&&this.pbfSupportedForQuery(e);let s=null;if(this.recentlyUsedQueries){const t=this.convertQueryToLruCacheKey(e);s=this.recentlyUsedQueries.getFromCache(t),null===s&&(s=!0!==r?i(this._layer.parsedUrl.path,e):this.queryPBF(e),this.recentlyUsedQueries.addToCache(t,s),s=s.catch((e=>{throw this.recentlyUsedQueries?.removeFromCache(t),e})))}return this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:e,method:t}),null===s&&(s=!0!==r?i(this._layer.parsedUrl.path,e):this.queryPBF(e)),s},f._getFilteredSet=async function(e,t,i,r,s){const n=await this.databaseType();if(this.isTable()&&t&&null!==e&&""!==e){return new a([],[],!0,null)}if(this._canUsePagination())return this._getFilteredSetUsingPaging(e,t,i,r,s);let o="",u=!1;null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(o=r.constructClause(),u=!0);const c=new C;this.datesInUnknownTimezone&&(c.timeReferenceUnknownClient=!0),c.where=null===i?null===t?"1=1":"":l.toWhereClause(i,n),this._requestStandardised&&(c.sqlFormat="standard"),c.spatialRelationship=this._makeRelationshipEnum(e),c.outSpatialReference=this.spatialReference,c.orderByFields=""!==o?o.split(","):null,c.geometry=null===t?null:t,c.relationParameter=this._makeRelationshipParam(e);let d=await this.executeQuery(c,"executeForIds");null===d&&(d=[]),this._checkCancelled(s);return new a([],d,u,null)},f._expandPagedSet=function(e,t,i,r,s){return this._expandPagedSetFeatureSet(e,t,i,r,s)},f._getFilteredSetUsingPaging=async function(e,t,i,r,s){let n="",o=!1;null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(n=r.constructClause(),o=!0);const u=await this.databaseType();let c=null===i?null===t?"1=1":"":l.toWhereClause(i,u);this._layer.definitionExpression&&this._useDefinitionExpression&&(c=""!==c?"(("+this._layer.definitionExpression+") AND ("+c+"))":this._layer.definitionExpression);let d=this._maxQueryRate();const h=this._layer.capabilities?.query.maxRecordCount;null!=h&&h<d&&(d=h);let p=null;if(!0===this._pageJustIds)p=new a([],["GETPAGES"],o,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:this._layer.objectIdField,resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:c,orderByFields:n,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});else{let i=!0;!0===this._removeGeometry&&(i=!1);const r=this._overrideFields??this._fieldsIncludingObjectId(["*"]);p=new a([],["GETPAGES"],o,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:r.join(","),resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:c,orderByFields:n,returnGeometry:i,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}return await this._expandPagedSet(p,d,0,1,s),p},f._clonePageDefinition=function(e){return null===e?null:!0!==e.groupbypage?{groupbypage:!1,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}:{groupbypage:!0,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,useOIDpagination:e.useOIDpagination,generatedOid:e.generatedOid,groupByFieldsForStatistics:e.groupByFieldsForStatistics,resultOffset:e.resultOffset,outStatistics:e.outStatistics,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}},f._getPhysicalPage=async function(e,t,i){const r=e.pagesDefinition.internal.lastRetrieved,s=r,a=e.pagesDefinition.internal.lastPage,n=new C;this._requestStandardised&&(n.sqlFormat="standard"),this.datesInUnknownTimezone&&(n.timeReferenceUnknownClient=!0),n.spatialRelationship=e.pagesDefinition.spatialRel,n.relationParameter=e.pagesDefinition.relationParam,n.outFields=e.pagesDefinition.outFields.split(","),n.num=e.pagesDefinition.resultRecordCount,n.start=e.pagesDefinition.internal.lastPage,n.geometry=e.pagesDefinition.geometry,n.where=e.pagesDefinition.where,n.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,n.returnGeometry=e.pagesDefinition.returnGeometry,n.outSpatialReference=this.spatialReference;const l=await this.executeQuery(n,"execute");if(this._checkCancelled(i),e.pagesDefinition.internal.lastPage!==a)return"done";const o=this._layer.objectIdField;for(let u=0;u<l.features.length;u++)e.pagesDefinition.internal.set[s+u]=l.features[u].attributes[o];if(!1===this._pageJustIds)for(let u=0;u<l.features.length;u++)this._featureCache[l.features[u].attributes[o]]=l.features[u];return(void 0===l.exceededTransferLimit&&l.features.length!==e.pagesDefinition.resultRecordCount||!1===l.exceededTransferLimit)&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=r+l.features.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,"done"},f._fieldsIncludingObjectId=function(e){if(null===e)return[this.objectIdField];const t=e.slice(0);if(t.includes("*"))return t;let i=!1;for(const r of t)if(r.toUpperCase()===this.objectIdField.toUpperCase()){i=!0;break}return!1===i&&t.push(this.objectIdField),t},f._getFeatures=async function(e,t,i,r){const s=[];if(-1!==t&&void 0===this._featureCache[t]&&s.push(t),!0===this._checkIfNeedToExpandKnownPage(e,this._maxProcessingRate()))return await this._expandPagedSet(e,this._maxProcessingRate(),0,0,r),this._getFeatures(e,t,i,r);let a=0;for(let u=e._lastFetchedIndex;u<e._known.length;u++){if(e._lastFetchedIndex+=1,a++,void 0===this._featureCache[e._known[u]]){let i=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){const t=this._layer._mode;if(void 0!==t._featureMap[e._known[u]]){const r=t._featureMap[e._known[u]];null!==r&&(i=!0,this._featureCache[e._known[u]]=r)}}if(!1===i&&(e._known[u]!==t&&s.push(e._known[u]),s.length>=this._maxProcessingRate()-1))break}if(a>=i&&0===s.length)break}if(0===s.length)return"success";const n=new C;this._requestStandardised&&(n.sqlFormat="standard"),this.datesInUnknownTimezone&&(n.timeReferenceUnknownClient=!0),n.objectIds=s,n.outFields=this._overrideFields??this._fieldsIncludingObjectId(["*"]),n.returnGeometry=!0,!0===this._removeGeometry&&(n.returnGeometry=!1),n.outSpatialReference=this.spatialReference;const l=await this.executeQuery(n,"execute");if(this._checkCancelled(r),void 0!==l.error)throw new Q.FeatureSetError(Q.FeatureSetErrorCodes.RequestFailed,{reason:l.error});const o=this._layer.objectIdField;for(let u=0;u<l.features.length;u++)this._featureCache[l.features[u].attributes[o]]=l.features[u];return"success"},f._getDistinctPages=async function(e,t,i,r,s,a,n,o,u){await this._ensureLoaded();const c=await this.databaseType();let d=i.parseTree.column;const h=this._layer.fields??[];for(let l=0;l<h.length;l++)if(h[l].name.toLowerCase()===d.toLowerCase()){d=h[l].name;break}const p=new C;this._requestStandardised&&(p.sqlFormat="standard"),this.datesInUnknownTimezone&&(p.timeReferenceUnknownClient=!0);let y=null===a?null===s?"1=1":"":l.toWhereClause(a,c);this._layer.definitionExpression&&this._useDefinitionExpression&&(y=""!==y?"(("+this._layer.definitionExpression+") AND ("+y+"))":this._layer.definitionExpression),p.where=y,p.spatialRelationship=this._makeRelationshipEnum(r),p.relationParameter=this._makeRelationshipParam(r),p.geometry=null===s?null:s,p.returnDistinctValues=!0,p.returnGeometry=!1,p.outFields=[d];const f=await this.executeQuery(p,"execute");if(this._checkCancelled(u),!f.hasOwnProperty("features"))throw new Q.FeatureSetError(Q.FeatureSetErrorCodes.InvalidStatResponse);let _=!1;for(let l=0;l<h.length;l++)if(h[l].name===d){"date"===h[l].type&&(_=!0);break}for(let l=0;l<f.features.length;l++){if(_){const e=f.features[l].attributes[d];null!==e?o.push(new Date(e)):o.push(e)}else o.push(f.features[l].attributes[d]);if(o.length>=n)break}if(0===f.features.length)return o;if(f.features.length===this._layer.capabilities?.query.maxRecordCount&&o.length<n){return{calculated:!0,result:await this._getDistinctPages(e+f.features.length,t,i,r,s,a,n,o,u)}}return o},f._distinctStat=async function(e,t,i,r,s,a,n){return{calculated:!0,result:await this._getDistinctPages(0,e,t,i,r,s,a,[],n)}},f.isTable=function(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType||"esriGeometryNull"===this._layer.geometryType},f._countstat=async function(e,t,i,r){const s=await this.databaseType(),a=new C;if(this._requestStandardised&&(a.sqlFormat="standard"),this.isTable()&&i&&null!==t&&""!==t)return{calculated:!0,result:0};let n=null===r?null===i?"1=1":"":l.toWhereClause(r,s);this._layer.definitionExpression&&this._useDefinitionExpression&&(n=""!==n?"(("+this._layer.definitionExpression+") AND ("+n+"))":this._layer.definitionExpression),a.where=n,this.datesInUnknownTimezone&&(a.timeReferenceUnknownClient=!0),a.where=n,a.spatialRelationship=this._makeRelationshipEnum(t),a.relationParameter=this._makeRelationshipParam(t),a.geometry=null===i?null:i,a.returnGeometry=!1;return{calculated:!0,result:await this.executeQuery(a,"executeForCount")}},f._stats=async function(e,t,i,r,s,a,n){await this._ensureLoaded();const u=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression,c=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics,d=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsDistinct;if("count"===e)return d?this._countstat(e,i,r,s):{calculated:!1};if(!1===c||!1===l.isSingleField(t)&&!1===u||!1===t.isStandardized)return""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,a,n);if("distinct"===e)return!1===d?""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,a,n):this._distinctStat(e,t,i,r,s,a,n);const h=await this.databaseType();if(this.isTable()&&r&&null!==i&&""!==i)return{calculated:!0,result:null};const p=new C;this._requestStandardised&&(p.sqlFormat="standard");let y=null===s?null===r?"1=1":"":l.toWhereClause(s,h);this._layer.definitionExpression&&this._useDefinitionExpression&&(y=""!==y?"(("+this._layer.definitionExpression+") AND ("+y+"))":this._layer.definitionExpression),p.where=y,p.spatialRelationship=this._makeRelationshipEnum(i),p.relationParameter=this._makeRelationshipParam(i),p.geometry=null===r?null:r,this.datesInUnknownTimezone&&(p.timeReferenceUnknownClient=!0);const f=new E;f.statisticType=o.decodeStatType(e),f.onStatisticField=l.toWhereClause(t,h),f.outStatisticFieldName="ARCADE_STAT_RESULT",p.returnGeometry=!1;let _="ARCADE_STAT_RESULT";p.outStatistics=[f];const g=await this.executeQuery(p,"execute");if(!g.hasOwnProperty("features")||0===g.features.length)throw new Q.FeatureSetError(Q.FeatureSetErrorCodes.InvalidStatResponse);let m=!1;const S=g.fields??[];for(let l=0;l<S.length;l++)if("ARCADE_STAT_RESULT"===S[l].name.toUpperCase()){_=S[l].name,"date"===S[l].type&&(m=!0);break}if(m){let e=g.features[0].attributes[_];return null!==e&&(e=new Date(g.features[0].attributes[_])),{calculated:!0,result:e}}return{calculated:!0,result:g.features[0].attributes[_]}},f._stat=function(e,t,i,r,s,a,n){return this._stats(e,t,i,r,s,a,n)},f._canDoAggregates=async function(e,t){await this._ensureLoaded();let i=!1;const r=this._layer.capabilities?.query,s=!0===r?.supportsSqlExpression;if(null!=r&&!0===r.supportsStatistics&&!0===r.supportsOrderBy&&(i=!0),i)for(let a=0;a<t.length-1;a++)(!1===t[a].workingexpr?.isStandardized||!1===l.isSingleField(t[a].workingexpr)&&!1===s)&&(i=!1);return!1!==i},f._makeRelationshipEnum=function(e){if(e.includes("esriSpatialRelRelation"))return"relation";switch(e){case"esriSpatialRelRelation":return"relation";case"esriSpatialRelIntersects":return"intersects";case"esriSpatialRelContains":return"contains";case"esriSpatialRelOverlaps":return"overlaps";case"esriSpatialRelWithin":return"within";case"esriSpatialRelTouches":return"touches";case"esriSpatialRelCrosses":return"crosses";case"esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return e},f._makeRelationshipParam=function(e){return e.includes("esriSpatialRelRelation")?e.split(":")[1]:""},f._getAggregatePagesDataSourceDefinition=async function(e,t,i,r,s,n,o){await this._ensureLoaded();const u=await this.databaseType();let c="",d=!1,h=!1;null!==n&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(c=n.constructClause(),h=!0),this._layer.capabilities&&this._layer.capabilities.query&&!1===this._layer.capabilities.query.supportsPagination&&(h=!1,d=!0,c=this._layer.objectIdField);const p=[];for(let a=0;a<t.length;a++){const e=new E;e.onStatisticField=null!==t[a].workingexpr?l.toWhereClause(t[a].workingexpr,u):"",e.outStatisticFieldName=t[a].field,e.statisticType=t[a].toStatisticsName(),p.push(e)}""===c&&(c=e.join(","));let y=this._maxQueryRate();const f=this._layer.capabilities?.query.maxRecordCount;null!=f&&f<y&&(y=f);let _=null===s?null===r?"1=1":"":l.toWhereClause(s,u);this._layer.definitionExpression&&this._useDefinitionExpression&&(_=""!==_?"(("+this._layer.definitionExpression+") AND ("+_+"))":this._layer.definitionExpression);return new a([],["GETPAGES"],h,{groupbypage:!0,spatialRel:this._makeRelationshipEnum(i),relationParam:this._makeRelationshipParam(i),outFields:["*"],useOIDpagination:d,generatedOid:o,resultRecordCount:y,resultOffset:0,groupByFieldsForStatistics:e,outStatistics:p,geometry:null===r?null:r,where:_,orderByFields:c,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})},f._getAgregagtePhysicalPage=async function(e,i,r){let s=e.pagesDefinition.where;!0===e.pagesDefinition.useOIDpagination&&(s=""!==s?"("+s+") AND ("+e.pagesDefinition.generatedOid+">"+e.pagesDefinition.internal.lastMaxId.toString()+")":e.pagesDefinition.generatedOid+">"+e.pagesDefinition.internal.lastMaxId.toString());const a=e.pagesDefinition.internal.lastRetrieved,n=a,l=e.pagesDefinition.internal.lastPage,o=new C;if(this._requestStandardised&&(o.sqlFormat="standard"),o.where=s,o.spatialRelationship=e.pagesDefinition.spatialRel,o.relationParameter=e.pagesDefinition.relationParam,o.outFields=e.pagesDefinition.outFields,o.outStatistics=e.pagesDefinition.outStatistics,o.geometry=e.pagesDefinition.geometry,o.groupByFieldsForStatistics=e.pagesDefinition.groupByFieldsForStatistics,o.num=e.pagesDefinition.resultRecordCount,o.start=e.pagesDefinition.internal.lastPage,o.returnGeometry=e.pagesDefinition.returnGeometry,this.datesInUnknownTimezone&&(o.timeReferenceUnknownClient=!0),o.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,this.isTable()&&o.geometry&&o.spatialRelationship)return[];const u=await this.executeQuery(o,"execute");if(this._checkCancelled(r),!u.hasOwnProperty("features"))throw new Q.FeatureSetError(Q.FeatureSetErrorCodes.InvalidStatResponse);const c=[];if(e.pagesDefinition.internal.lastPage!==l)return[];u.features.length>0&&void 0===u.features[0].attributes[e.pagesDefinition.generatedOid]&&(e.pagesDefinition.generatedOid=e.pagesDefinition.generatedOid.toLowerCase());for(let t=0;t<u.features.length;t++)e.pagesDefinition.internal.set[n+t]=u.features[t].attributes[e.pagesDefinition.generatedOid];for(let d=0;d<u.features.length;d++)c.push(new t({attributes:u.features[d].attributes,geometry:null}));return!0===e.pagesDefinition.useOIDpagination?0===u.features.length?e.pagesDefinition.internal.fullyResolved=!0:e.pagesDefinition.internal.lastMaxId=u.features[u.features.length-1].attributes[e.pagesDefinition.generatedOid]:(void 0===u.exceededTransferLimit&&u.features.length!==e.pagesDefinition.resultRecordCount||!1===u.exceededTransferLimit)&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=a+u.features.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,c},y.create=function(e,t,i,r,s){return new y({layer:new h({url:e,outFields:null===t?["*"]:t}),spatialReference:i,lrucache:r,interceptor:s})},f.relationshipMetaData=function(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON&&this._layer.source.sourceJSON.relationships?this._layer.source.sourceJSON.relationships:[]},f.serviceUrl=function(){return n.extractServiceUrl(this._layer.parsedUrl.path)},f.queryAttachments=async function(e,t,i,s,a){const n=this._layer.capabilities;if(n?.data.supportsAttachment&&n?.operations.supportsQueryAttachments){const n={objectIds:[e],returnMetadata:a};(t&&t>0||i&&i>0)&&(n.size=[t&&t>0?t:0,i&&i>0?i:t+1]),s&&s.length>0&&(n.attachmentTypes=s),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:n,method:"attachments"});const l=await this._layer.queryAttachments(n),o=[];return l&&l[e]&&l[e].forEach((t=>{const i=this._layer.parsedUrl.path+"/"+e.toString()+"/attachments/"+t.id.toString();let s=null;a&&t.exifInfo&&(s=U.convertJsonToArcade(t.exifInfo,"system",!0)),o.push(new r(t.id,t.name,t.contentType,t.size,i,s,t.keywords??null))})),o}return[]},f.queryRelatedFeatures=async function(e){const r={f:"json",relationshipId:e.relationshipId.toString(),definitionExpression:e.where,outFields:e.outFields?.join(","),returnGeometry:e.returnGeometry.toString()};void 0!==e.resultOffset&&null!==e.resultOffset&&(r.resultOffset=e.resultOffset.toString()),void 0!==e.resultRecordCount&&null!==e.resultRecordCount&&(r.resultRecordCount=e.resultRecordCount.toString()),e.orderByFields&&(r.orderByFields=e.orderByFields.join(",")),e.objectIds&&e.objectIds.length>0&&(r.objectIds=e.objectIds.join(",")),e.outSpatialReference&&(r.outSR=JSON.stringify(e.outSpatialReference.toJSON())),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preRequestCallback({layer:this._layer,queryPayload:r,method:"relatedrecords",url:this._layer.parsedUrl.path+"/queryRelatedRecords"});const s=await i(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:r});if(s.data){const e={},i=s.data;if(i&&i.relatedRecordGroups){const r=i.spatialReference;for(const s of i.relatedRecordGroups){const a=s.objectId,n=[];for(const e of s.relatedRecords){e.geometry&&(e.geometry.spatialReference=r);const i=new t({geometry:e.geometry?d.fromJSON(e.geometry):null,attributes:e.attributes});n.push(i)}e[a]={features:n,exceededTransferLimit:!0===i.exceededTransferLimit}}}return e}throw new Q.FeatureSetError(Q.FeatureSetErrorCodes.InvalidRequest)},f.getFeatureByObjectId=async function(e,t){const i=new C;i.outFields=t,i.returnGeometry=!1,i.outSpatialReference=this.spatialReference,i.where=this.objectIdField+"="+e.toString(),this.datesInUnknownTimezone&&(i.timeReferenceUnknownClient=!0),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:i,method:"execute"});const r=await k.executeQueryJSON(this._layer.parsedUrl.path,i);return 1===r.features.length?r.features[0]:null},f.getIdentityUser=async function(){await this.load();const e=c.id?.findCredential(this._layer.url);return e?e.userId:null},f.getOwningSystemUrl=async function(){await this.load();const e=c.id?.findServerInfo(this._layer.url);if(e)return e.owningSystemUrl;let t=this._layer.url;const r=t.toLowerCase().indexOf("/rest/services");if(t=r>-1?t.substring(0,r):t,t){t+="/rest/info";try{const e=await i(t,{query:{f:"json"}});let r="";return e.data&&e.data.owningSystemUrl&&(r=e.data.owningSystemUrl),r}catch(s){return""}}return""},f.getDataSourceFeatureSet=function(){const e=new y({layer:this._layer,spatialReference:this.spatialReference??void 0,outFields:this._overrideFields??void 0,includeGeometry:!this._removeGeometry,lrucache:this.recentlyUsedQueries??void 0,interceptor:this.featureSetQueryInterceptor??void 0});return e._useDefinitionExpression=!1,e},e._createClass(y,[{key:"urlQueryPath",get:function(){return this._layer.parsedUrl.path||""}},{key:"gdbVersion",get:function(){return this._layer&&this._layer.capabilities&&this._layer.capabilities.data&&this._layer.capabilities.data.isVersioned?this._layer.gdbVersion||"SDE.DEFAULT":""}},{key:"preferredTimeReference",get:function(){return void 0===this._cachedDateMetaData.preferredTimeReference&&(this._cachedDateMetaData.preferredTimeReference=this._layer?.preferredTimeReference?.toJSON()??null),this._cachedDateMetaData.preferredTimeReference}},{key:"dateFieldsTimeReference",get:function(){return void 0===this._cachedDateMetaData.dateFieldsTimeReference&&(this._cachedDateMetaData.dateFieldsTimeReference=this._layer?.dateFieldsTimeReference?.toJSON()??null),this._cachedDateMetaData.dateFieldsTimeReference}},{key:"datesInUnknownTimezone",get:function(){return this._layer.datesInUnknownTimezone}},{key:"editFieldsInfo",get:function(){return void 0===this._cachedDateMetaData.editFieldsInfo&&(this._cachedDateMetaData.editFieldsInfo=this._layer?.editFieldsInfo?.toJSON()??null),this._cachedDateMetaData.editFieldsInfo}},{key:"timeInfo",get:function(){return void 0===this._cachedDateMetaData.timeInfo&&(this._cachedDateMetaData.timeInfo=this._layer?.timeInfo?.toJSON()??null),this._cachedDateMetaData.timeInfo}}]),y}(s);return B}));