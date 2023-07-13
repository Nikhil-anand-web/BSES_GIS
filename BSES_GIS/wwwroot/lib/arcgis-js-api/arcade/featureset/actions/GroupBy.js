/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","../../../chunks/languageUtils","./Adapted","./AttributeFilter","./OrderBy","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../support/shared","../support/sqlUtils","../support/stats","../support/StatsField","../../../core/MD5","../../../core/sql/WhereClause","../../../geometry/SpatialReference","../../../layers/support/Field","../../../layers/support/FieldsIndex","../support/errorsupport"],(function(e,t,i,n,s,a,r,l,o,d,u,c,f,h,p,g,_,y,m){"use strict";function b(e){if(!e)return"COUNT";switch(e.toLowerCase()){case"max":return"MAX";case"var":case"variance":return"VAR";case"avg":case"average":case"mean":return"AVG";case"min":return"MIN";case"sum":return"SUM";case"stdev":case"stddev":return"STDDEV";case"count":return"COUNT"}return"COUNT"}return function(F){function w(e){var t;return(t=F.call(this,e)||this)._decodedStatsfield=[],t._decodedGroupbyfield=[],t._candosimplegroupby=!0,t.phsyicalgroupbyfields=[],t.objectIdField="ROW__ID",t._internalObjectIdField="ROW__ID",t._adaptedFields=[],t.declaredClass="esri.arcade.featureset.actions.Aggregate",t._uniqueIds=1,t._maxQuery=10,t._maxProcessing=10,t._parent=e.parentfeatureset,t._config=e,t}e._inherits(w,F);var S=w.prototype;return S.isTable=function(){return!0},S._getSet=async function(e){if(null===this._wset){const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,this._wset}return this._wset},S._isInFeatureSet=function(){return d.IdState.InFeatureSet},S._nextUniqueName=function(e){for(;1===e["T"+this._uniqueIds.toString()];)this._uniqueIds++;const t="T"+this._uniqueIds.toString();return e[t]=1,t},S._convertToEsriFieldType=function(e){return e},S._initialiseFeatureSet=function(){const e={};let t=!1,i=1;const s=this._parent?this._parent.getFieldsIndex():new y([]);for(this.objectIdField="ROW__ID",this.globalIdField="";!1===t;){let e=!1;for(let t=0;t<this._config.groupbyfields.length;t++)if(this._config.groupbyfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}if(!1===e)for(let t=0;t<this._config.statsfields.length;t++)if(this._config.statsfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}!1===e?t=!0:(this.objectIdField="ROW__ID"+i.toString(),i++)}for(const n of this._config.statsfields){const e=new f;e.field=n.name,e.tofieldname=n.name,e.workingexpr=n.expression instanceof p.WhereClause?n.expression:p.WhereClause.create(n.expression,s),e.typeofstat=b(n.statistic),this._decodedStatsfield.push(e)}this._decodedGroupbyfield=[];for(const n of this._config.groupbyfields){const e={name:n.name,singlefield:null,tofieldname:n.name,expression:n.expression instanceof p.WhereClause?n.expression:p.WhereClause.create(n.expression,s)};this._decodedGroupbyfield.push(e)}if(null!==this._parent){this.geometryType=this._parent.geometryType,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField="";for(const t of this._parent.fields)e[t.name.toUpperCase()]=1;this.types=null}else this.geometryType=d.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null,this.spatialReference=new g({wkid:4326});this.fields=[];const a=new f;a.field=this._nextUniqueName(e),a.tofieldname=this.objectIdField,a.workingexpr=p.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex()),a.typeofstat="MIN",this._decodedStatsfield.push(a);for(const r of this._decodedGroupbyfield){const t=new _;if(r.name=this._nextUniqueName(e),t.name=r.tofieldname,t.alias=t.name,u.isSingleField(r.expression)){const e=this._parent.getField(u.toWhereClause(r.expression,d.FeatureServiceDatabaseType.Standardised));if(!e)throw new m.FeatureSetError(m.FeatureSetErrorCodes.AggregationFieldNotFound);r.name=e.name,r.singlefield=e.name,this.phsyicalgroupbyfields.push(e.name),t.type=e.type}else{t.type=this._convertToEsriFieldType(u.predictType(r.expression,this._parent.fields));const e=new _;e.name=r.name,e.alias=e.name,this.phsyicalgroupbyfields.push(r.name),this._adaptedFields.push(new n.SqlExpressionAdapted(e,r.expression)),this._candosimplegroupby=!1}this.fields.push(t)}if(this._adaptedFields.length>0)for(const r of this._parent.fields)this._adaptedFields.push(new n.OriginalField(r));for(let n=0;n<this._decodedStatsfield.length;n++){const t=new _;let i=null;const s=this._decodedStatsfield[n];s.field=this._nextUniqueName(e),s.tofieldname===this.objectIdField&&(this._internalObjectIdField=s.field),t.name=s.tofieldname,t.alias=t.name;const a=null!==s.workingexpr&&u.isSingleField(s.workingexpr)?u.toWhereClause(s.workingexpr,d.FeatureServiceDatabaseType.Standardised):"";switch(this._decodedStatsfield[n].typeofstat){case"SUM":if(""!==a){if(i=this._parent.getField(a),!i)throw new m.FeatureSetError(m.FeatureSetErrorCodes.AggregationFieldNotFound);t.type=i.type}else t.type="double";break;case"MIN":case"MAX":if(""!==a){if(i=this._parent.getField(a),!i)throw new m.FeatureSetError(m.FeatureSetErrorCodes.AggregationFieldNotFound);t.type=i.type}else t.type="double";break;case"COUNT":t.type="integer";break;case"STDDEV":case"VAR":case"AVG":if(""!==a&&(i=this._parent.getField(a),!i))throw new m.FeatureSetError(m.FeatureSetErrorCodes.AggregationFieldNotFound);t.type="double"}this.fields.push(t)}},S._canDoAggregates=async function(){return!1},S._getFeatures=async function(e,t,i,n){-1!==t&&this._featureCache[t];const s=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(e,s)?(await this._expandPagedSet(e,s,0,0,n),this._getFeatures(e,t,i,n)):"success"},S._getFilteredSet=async function(e,t,i,r,d){if(""!==e)return new l([],[],!0,null);let c=null;const f={ordered:!1,nowhereclause:!1};if(await this._ensureLoaded(),null!==i)for(let n=0;n<this._decodedStatsfield.length;n++)if(!0===u.scanForField(i,this._decodedStatsfield[n].tofieldname)){f.nowhereclause=!0,i=null;break}if(null!==r){f.ordered=!0;for(let e=0;e<this._decodedStatsfield.length;e++)if(!0===r.scanForField(this._decodedStatsfield[e].tofieldname)){r=null,f.ordered=!1;break}if(null!==r)for(const e of this._decodedGroupbyfield)if(null===e.singlefield&&!0===r.scanForField(e.tofieldname)){r=null,f.ordered=!1;break}}if(!1!==this._candosimplegroupby&&await this._parent._canDoAggregates(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,null)){let e=null;i&&(e=this._reformulateWhereClauseWithoutGroupByFields(i));let t=null;r&&(t=this._reformulateOrderClauseWithoutGroupByFields(r));const n=await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,e,t,this._internalObjectIdField);return this._checkCancelled(d),c=!0===f.nowhereclause?new l(n._candidates.slice(0).concat(n._known.slice(0)),[],!0===f.ordered&&n._ordered,this._clonePageDefinition(n.pagesDefinition)):new l(n._candidates.slice(0),n._known.slice(0),!0===f.ordered&&n._ordered,this._clonePageDefinition(n.pagesDefinition)),c}let h=this._parent;if(this._adaptedFields.length>0&&(h=new n.AdaptedFeatureSet({parentfeatureset:this._parent,adaptedFields:this._adaptedFields,extraFilter:null})),!0===f.nowhereclause)c=new l(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new a({parentfeatureset:h,orderbyclause:new o(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}});else{let e=h;if(null!==i){let t=null;i&&(t=this._reformulateWhereClauseWithoutGroupByFields(i)),e=new s({parentfeatureset:e,whereclause:t})}c=new l(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new a({parentfeatureset:e,orderbyclause:new o(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}})}return c},S._reformulateWhereClauseWithoutStatsFields=function(e){for(const t of this._decodedStatsfield)e=u.reformulateWithoutField(e,t.tofieldname,u.toWhereClause(t.workingexpr,d.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex());return e},S._reformulateWhereClauseWithoutGroupByFields=function(e){for(const t of this._decodedGroupbyfield)t.tofieldname!==t.name&&(e=u.reformulateWithoutField(e,t.tofieldname,u.toWhereClause(t.expression,d.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex()));return e},S._reformulateOrderClauseWithoutGroupByFields=function(e){const t=[];for(const i of this._decodedGroupbyfield)i.tofieldname!==i.name&&t.push({field:i.tofieldname,newfield:i.name});return t.length>0?e.replaceFields(t):e},S._clonePageDefinition=function(e){return null===e?null:!0===e.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,internal:e.internal}:this._parent._clonePageDefinition(e)},S._refineSetBlock=async function(e,t,i){if(!0===this._checkIfNeedToExpandCandidatePage(e,this._maxQuery))return await this._expandPagedSet(e,this._maxQuery,0,0,i),this._refineSetBlock(e,t,i);this._checkCancelled(i);const n=e._candidates.length;this._refineKnowns(e,t);e._candidates.length;return e._candidates.length,e},S._expandPagedSet=function(e,t,i,n,s){return this._expandPagedSetFeatureSet(e,t,i,n,s)},S._getPhysicalPage=async function(e,i,n){if(!0===e.pagesDefinition.aggregatefeaturesetpagedefinition)return this._sequentialGetPhysicalItem(e,e.pagesDefinition.resultRecordCount,n,[]);const s=await this._getAgregagtePhysicalPage(e,i,n);for(const a of s){const e={geometry:a.geometry,attributes:{}},i={};for(const t in a.attributes)i[t.toLowerCase()]=a.attributes[t];for(const t of this._decodedGroupbyfield)e.attributes[t.tofieldname]=i[t.name.toLowerCase()];for(const t of this._decodedStatsfield)e.attributes[t.tofieldname]=i[t.field.toLowerCase()];this._featureCache[e.attributes[this.objectIdField]]=new t(e)}return s.length},S._sequentialGetPhysicalItem=function(e,t,i,n){return new Promise(((s,a)=>{null===e.pagesDefinition.internal.iterator&&(e.pagesDefinition.internal.iterator=e.pagesDefinition.internal.subfeatureset.iterator(i)),!0===e.pagesDefinition.internal.fullyResolved||0===t?s(n.length):this._nextAggregateItem(e,t,i,n,(a=>{null===a?s(n.length):(t-=1,s(this._sequentialGetPhysicalItem(e,t,i,n)))}),a)}))},S._nextAggregateItem=function(e,t,n,s,a,r){try{i.tick(e.pagesDefinition.internal.iterator.next()).then((i=>{if(null===i)if(null!==e.pagesDefinition.internal.workingItem){const t=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);s.push(t),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(t.attributes[this.objectIdField]),e.pagesDefinition.internal.fullyResolved=!0,a(null)}else e.pagesDefinition.internal.fullyResolved=!0,a(null);else{const l=this._generateAggregateHash(i);if(null===e.pagesDefinition.internal.workingItem)e.pagesDefinition.internal.workingItem={features:[i],id:l};else{if(l!==e.pagesDefinition.internal.workingItem.id){const n=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);return s.push(n),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(n.attributes[this.objectIdField]),t-=1,e.pagesDefinition.internal.workingItem={features:[i],id:l},void a(n)}e.pagesDefinition.internal.workingItem.features.push(i)}this._nextAggregateItem(e,t,n,s,a,r)}}),r)}catch(l){r(l)}},S._calculateFieldStat=function(e,t,i){const n=[];for(let s=0;s<e.features.length;s++)if(null!==t.workingexpr){const i=t.workingexpr.calculateValue(e.features[s]);null!==i&&n.push(i)}else n.push(null);switch(t.typeofstat){case"MIN":i.attributes[t.tofieldname]=c.calculateStat("min",n,-1);break;case"MAX":i.attributes[t.tofieldname]=c.calculateStat("max",n,-1);break;case"SUM":i.attributes[t.tofieldname]=c.calculateStat("sum",n,-1);break;case"COUNT":i.attributes[t.tofieldname]=n.length;break;case"VAR":i.attributes[t.tofieldname]=c.calculateStat("var",n,-1);break;case"STDDEV":i.attributes[t.tofieldname]=c.calculateStat("stddev",n,-1);break;case"AVG":i.attributes[t.tofieldname]=c.calculateStat("avg",n,-1)}return!0},S._calculateAndAppendAggregateItem=function(e){const i={attributes:{},geometry:null};for(const t of this._decodedGroupbyfield){const n=t.singlefield?e.features[0].attributes[t.singlefield]:t.expression.calculateValue(e.features[0]);i.attributes[t.tofieldname]=n}for(const t of this._decodedStatsfield)this._calculateFieldStat(e,t,i);const n=[];for(let t=0;t<this._decodedStatsfield.length;t++)n.push(this._calculateFieldStat(e,this._decodedStatsfield[t],i));return this._featureCache[i.attributes[this.objectIdField]]=new t({attributes:i.attributes,geometry:i.geometry}),i},S._generateAggregateHash=function(e){let t="";for(const i of this._decodedGroupbyfield){const n=i.singlefield?e.attributes[i.singlefield]:i.expression.calculateValue(e);t+=null==n?":":":"+n.toString()}return h.createMD5Hash(t,h.outputTypes.String)},S._stat=async function(){return{calculated:!1}},S.getFeatureByObjectId=async function(){return null},w.registerAction=function(){r._featuresetFunctions.groupby=function(e,t){return new w({parentfeatureset:this,groupbyfields:e,statsfields:t})}},e._createClass(w)}(r)}));