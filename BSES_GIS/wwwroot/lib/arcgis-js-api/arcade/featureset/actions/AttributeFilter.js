/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../../../core/promiseUtils","../../../core/sql/WhereClause","../../../geometry/SpatialReference"],(function(e,t,s,n,i,r,a,l,u){"use strict";return function(h){function c(e){var t;return(t=h.call(this,e)||this).declaredClass="esri.arcade.featureset.actions.AttributeFilter",t._maxProcessing=1e3,t._parent=e.parentfeatureset,e.whereclause instanceof l.WhereClause?(t._whereclause=e.whereclause,t._whereClauseFunction=null):(t._whereClauseFunction=e.whereclause,t._whereclause=null),t}e._inherits(c,h);var o=c.prototype;return o._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new u({wkid:4326}),this.geometryType=i.layerGeometryEsriConstants.point)},o._getSet=async function(e){if(null===this._wset){await this._ensureLoaded();const t=await this._parent._getFilteredSet("",null,this._whereclause,null,e);return this._checkCancelled(e),null!==this._whereClauseFunction?this._wset=new n(t._candidates.slice(0).concat(t._known.slice(0)),[],t._ordered,this._clonePageDefinition(t.pagesDefinition)):this._wset=new n(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset}return this._wset},o._isInFeatureSet=function(e){let t=this._parent?._isInFeatureSet(e);return t===i.IdState.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?i.IdState.Unknown:t)},o._getFeature=function(e,t,s){return this._parent._getFeature(e,t,s)},o._getFeatures=function(e,t,s,n){return this._parent._getFeatures(e,t,s,n)},o._featureFromCache=function(e){return this._parent._featureFromCache(e)},o.executeWhereClause=function(e){return this._whereclause?.testFeature(e)??!1},o.executeWhereClauseDeferred=async function(e){if(null!==this._whereClauseFunction){const t=this._whereClauseFunction(e);return a.isPromiseLike(t),t}return this.executeWhereClause(e)},o._fetchAndRefineFeatures=async function(e,t,s){const r=new n([],e,!1,null),a=Math.min(t,e.length);if(await(this._parent?._getFeatures(r,-1,a,s)),this._checkCancelled(s),null==this._whereClauseFunction){for(let t=0;t<a;t++){const s=this._parent?._featureFromCache(e[t]);!0===this.executeWhereClause(s)?this._idstates[e[t]]=i.IdState.InFeatureSet:this._idstates[e[t]]=i.IdState.NotInFeatureSet}return"success"}const l=[];for(let n=0;n<a;n++){const t=this._parent?._featureFromCache(e[n]);l.push(await this.executeWhereClauseDeferred(t))}for(let n=0;n<t;n++)!0===l[n]?this._idstates[e[n]]=i.IdState.InFeatureSet:this._idstates[e[n]]=i.IdState.NotInFeatureSet;return"success"},o._getFilteredSet=async function(e,t,s,i,a){null!==this._whereClauseFunction||(null!==s?null!==this._whereclause&&(s=r.combine(this._whereclause,s)):s=this._whereclause),await this._ensureLoaded();const l=await this._parent._getFilteredSet(e,t,s,i,a);let u;return this._checkCancelled(a),u=null!==this._whereClauseFunction?new n(l._candidates.slice(0).concat(l._known.slice(0)),[],l._ordered,this._clonePageDefinition(l.pagesDefinition)):new n(l._candidates.slice(0),l._known.slice(0),l._ordered,this._clonePageDefinition(l.pagesDefinition)),u},o._stat=async function(e,t,s,n,i,a,l){if(null!==this._whereClauseFunction)return null===i&&""===s&&null===n?this._manualStat(e,t,a,l):{calculated:!1};let u=this._whereclause;null!==i&&null!==this._whereclause&&(u=r.combine(this._whereclause,i));const h=await this._parent._stat(e,t,s,n,u,a,l);return!1===h.calculated?null===i&&""===s&&null===n?this._manualStat(e,t,a,l):{calculated:!1}:h},o._canDoAggregates=async function(e,t,s,n,i){return null===this._whereClauseFunction&&(null!==i?null!==this._whereclause&&(i=r.combine(this._whereclause,i)):i=this._whereclause,null!==this._parent&&this._parent._canDoAggregates(e,t,s,n,i))},o._getAggregatePagesDataSourceDefinition=async function(e,s,n,i,a,l,u){if(null===this._parent)throw new t.FeatureSetError(t.FeatureSetErrorCodes.NeverReach);return null!==a?null!==this._whereclause&&(a=r.combine(this._whereclause,a)):a=this._whereclause,this._parent._getAggregatePagesDataSourceDefinition(e,s,n,i,a,l,u)},c.registerAction=function(){s._featuresetFunctions.filter=function(e){if("function"==typeof e)return new c({parentfeatureset:this,whereclause:e});let t=null;return e instanceof l.WhereClause&&(t=e),new c({parentfeatureset:this,whereclause:t})}},e._createClass(c)}(s)}));
