/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","./featureSetCollection","../chunks/languageUtils","./featureset/actions/AttributeFilter","./featureset/actions/GroupBy","./featureset/actions/OrderBy","./featureset/actions/SpatialFilter","./featureset/actions/Top","./featureset/sources/FeatureLayerDynamic","./featureset/sources/FeatureLayerMemory","./featureset/sources/FeatureLayerRelated","./featureset/support/cache","./featureset/support/errorsupport","./featureset/support/FeatureSet","./featureset/support/shared","../core/sql/WhereClause","../layers/FeatureLayer","../portal/PortalItem"],(function(e,t,a,r,n,i,l,s,o,u,c,d,f,y,p,h,m,S,_,F){"use strict";function w(){null===y.applicationCache&&(y.applicationCache=new y)}async function L(e,t){if(y.applicationCache){const r=y.applicationCache.getLayerInfo(e);if(r){const a=await r;return new _({url:e,outFields:t,sourceJSON:a})}const n=new _({url:e,outFields:t}),i=(async()=>(await n.load(),n.sourceJSON))();if(y.applicationCache){y.applicationCache.setLayerInfo(e,i);try{return await i,n}catch(a){throw y.applicationCache.clearLayerInfo(e),a}}return await i,n}return new _({url:e,outFields:t})}async function I(e,t,a,r,n,i=null){return g(await L(e,["*"]),t,a,r,n,i)}function g(e,t=null,a=null,r=!0,i=null,l=null){if(e instanceof _||n.isSubtypeGrouplayer(e)){const n={layer:e,spatialReference:t,outFields:a,includeGeometry:r,lrucache:i,interceptor:l};return!0==!(e.url||!e.source)?new d(n):new c(n)}return g(e.parent,t,a,r,i,l).filter(S.WhereClause.create(e.parent.subtypeField+"="+e.subtypeCode.toString(),e.parent?.fieldsIndex))}async function C(e){if(null!==y.applicationCache){const t=y.applicationCache.getLayerInfo(e);if(null!==t)return t}const t=(async()=>{const t=await a(e,{responseType:"json",query:{f:"json"}});return t.data?t.data:null})();if(null!==y.applicationCache){y.applicationCache.setLayerInfo(e,t);try{return await t}catch(r){throw y.applicationCache.clearLayerInfo(e),r}}return t}async function A(e,t){const r="QUERYDATAELEMTS:"+t.toString()+":"+e;if(null!==y.applicationCache){const e=y.applicationCache.getLayerInfo(r);if(null!==e)return e}const n=(async()=>{const r=await a(e+"/queryDataElements",{method:"post",responseType:"json",query:{layers:JSON.stringify([t.toString()]),f:"json"}});if(r.data){const e=r.data;if(e.layerDataElements&&e.layerDataElements[0])return e.layerDataElements[0]}throw new p.FeatureSetError(p.FeatureSetErrorCodes.DataElementsNotFound)})();if(null!==y.applicationCache){y.applicationCache.setLayerInfo(r,n);try{return await n}catch(i){throw y.applicationCache.clearLayerInfo(r),i}}return n}async function N(e){if(null!==y.applicationCache){const t=y.applicationCache.getLayerInfo(e);if(null!==t)return t}const t=(async()=>{const t=await a(e,{responseType:"json",query:{f:"json"}});if(t.data){const e=t.data;return e.layers||(e.layers=[]),e.tables||(e.tables=[]),e}return{layers:[],tables:[]}})();if(null!==y.applicationCache){y.applicationCache.setLayerInfo(e,t);try{return await t}catch(r){throw y.applicationCache.clearLayerInfo(e),r}}return t}async function b(e,t){const a={metadata:null,networkId:-1,unVersion:3,terminals:[],queryelem:null,layerNameLkp:{},lkp:null},r=await N(e);if(a.metadata=r,r.controllerDatasetLayers&&void 0!==r.controllerDatasetLayers.utilityNetworkLayerId&&null!==r.controllerDatasetLayers.utilityNetworkLayerId){if(r.layers)for(const e of r.layers)a.layerNameLkp[e.id]=e.name;if(r.tables)for(const e of r.tables)a.layerNameLkp[e.id]=e.name;const n=r.controllerDatasetLayers.utilityNetworkLayerId;a.networkId=n;const i=await A(e,n);if(i){a.queryelem=i,a.queryelem&&a.queryelem.dataElement&&void 0!==a.queryelem.dataElement.schemaGeneration&&(a.unVersion=a.queryelem.dataElement.schemaGeneration),a.lkp={},a.queryelem.dataElement.domainNetworks||(a.queryelem.dataElement.domainNetworks=[]);for(const e of a.queryelem.dataElement.domainNetworks){for(const t of e.edgeSources??[]){const e={layerId:t.layerId,sourceId:t.sourceId,className:a.layerNameLkp[t.layerId]??null};e.className&&(a.lkp[e.className]=e)}for(const t of e.junctionSources??[]){const e={layerId:t.layerId,sourceId:t.sourceId,className:a.layerNameLkp[t.layerId]??null};e.className&&(a.lkp[e.className]=e)}}if(a.queryelem.dataElement.terminalConfigurations)for(const e of a.queryelem.dataElement.terminalConfigurations)for(const t of e.terminals)a.terminals.push({terminalId:t.terminalId,terminalName:t.terminalName});const r=await C(e+"/"+n);if(r.systemLayers&&void 0!==r.systemLayers.associationsTableId&&null!==r.systemLayers.associationsTableId){const n=[];a.unVersion>=4&&(n.push("STATUS"),n.push("PERCENTALONG"));let i=await I(e+"/"+r.systemLayers.associationsTableId.toString(),t,["OBJECTID","FROMNETWORKSOURCEID","TONETWORKSOURCEID","FROMGLOBALID","TOGLOBALID","TOTERMINALID","FROMTERMINALID","ASSOCIATIONTYPE","ISCONTENTVISIBLE","GLOBALID",...n],!1,null,null);return await i.load(),a.unVersion>=4&&(i=i.filter(S.WhereClause.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)",i.getFieldsIndex())),await i.load()),{lkp:a.lkp,associations:i,unVersion:a.unVersion,terminals:a.terminals}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}async function T(e,t,a,r=null,n=null,i=!0,l=null,s=null){let o=e.serviceUrl();if(!o)return null;o="/"===o.charAt(o.length-1)?o+t.relatedTableId.toString():o+"/"+t.relatedTableId.toString();const u=await I(o,r,n,i,l,s);return new f({layer:e,relatedLayer:u,relationship:t,objectId:a,spatialReference:r,outFields:n,includeGeometry:i,lrucache:l,interceptor:s})}i.registerAction(),l.registerAction(),s.registerAction(),o.registerAction(),u.registerAction();let k=function(e){function a(t,a=null,r=null,n=null){var i;return(i=e.call(this)||this)._map=t,i._overridespref=a,i._lrucache=r,i._interceptor=n,i._instantLayers=[],i}t._inherits(a,e);var r=a.prototype;return r._makeAndAddFeatureSet=function(e,t=!0,a=null){const r=g(e,this._overridespref,null===a?["*"]:a,t,this._lrucache,this._interceptor);return this._instantLayers.push({featureset:r,opitem:e,includeGeometry:t,outFields:JSON.stringify(a)}),r},r.featureSetByName=async function(e,t=!0,a=null){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),this.featureSetByName(e,t,a);null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);for(let n=0;n<this._instantLayers.length;n++){const a=this._instantLayers[n];if(a.opitem.title===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[n].featureset}const i=[],l=this._map.allLayers.find((t=>{if(t instanceof _){if(t.title===e)return!0}else if(n.isSubtypeGrouplayer(t)){if(t.title===e)return!0;i.push(t)}return!1}));if(l)return this._makeAndAddFeatureSet(l,t,a);if(this._map.tables){const r=this._map.tables.find((t=>!!(t.title&&t.title===e||t.title&&t.title===e)));if(r){if(r instanceof _)return this._makeAndAddFeatureSet(r,t,a);if(r._materializedTable);else{const e=r.outFields?r:{...r,outFields:["*"]};r._materializedTable=new _(e)}return await r._materializedTable.load(),this._makeAndAddFeatureSet(r._materializedTable,t,a)}}for(const n of i){if("not-loaded"===n.loadStatus||"loading"===n.loadStatus)try{await n.load()}catch(s){}const r=n.sublayers.find((t=>t.title===e));if(r)return this._makeAndAddFeatureSet(r,t,a)}return null},r.featureSetById=async function(e,t=!0,a=["*"]){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),this.featureSetById(e,t,a);null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);for(let n=0;n<this._instantLayers.length;n++){const a=this._instantLayers[n];if(a.opitem.id===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[n].featureset}const i=[],l=this._map.allLayers.find((t=>{if(t instanceof _){if(t.id===e)return!0}else if(n.isSubtypeGrouplayer(t)){if(t.id===e)return!0;i.push(t)}return!1}));if(l)return this._makeAndAddFeatureSet(l,t,a);if(this._map.tables){const r=this._map.tables.find((t=>t.id===e));if(r){if(r instanceof _)return this._makeAndAddFeatureSet(r,t,a);if(r._materializedTable);else{const e={...r,outFields:["*"]};r._materializedTable=new _(e)}return await r._materializedTable.load(),this._makeAndAddFeatureSet(r._materializedTable,t,a)}}for(const n of i){if("not-loaded"===n.loadStatus||"loading"===n.loadStatus)try{await n.load()}catch(s){}const r=n.sublayers.find((t=>t.id===e));if(r)return this._makeAndAddFeatureSet(r,t,a)}return null},t._createClass(a)}(r),E=function(e){function a(t,a=null,r=null,n=null){var i;return(i=e.call(this)||this)._url=t,i._overridespref=a,i._lrucache=r,i._interceptor=n,i.metadata=null,i._instantLayers=[],i}t._inherits(a,e);var r=a.prototype;return r._makeAndAddFeatureSet=function(e,t=!0,a=null){const r=g(e,this._overridespref,null===a?["*"]:a,t,this._lrucache);return this._instantLayers.push({featureset:r,opitem:e,includeGeometry:t,outFields:JSON.stringify(a)}),r},r._loadMetaData=async function(){const e=await N(this._url);return this.metadata=e,e},r.load=function(){return this._loadMetaData()},r.clone=function(){return new a(this._url,this._overridespref,this._lrucache,this._interceptor)},r.featureSetByName=async function(e,t=!0,a=null){null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);for(let l=0;l<this._instantLayers.length;l++){const a=this._instantLayers[l];if(a.opitem.title===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[l].featureset}const n=await this._loadMetaData();let i=null;for(const l of n.layers??[])l.name===e&&(i=l);if(!i)for(const l of n.tables??[])l.name===e&&(i=l);if(i){const e=await L(this._url+"/"+i.id,["*"]);return this._makeAndAddFeatureSet(e,t,a)}return null},r.featureSetById=async function(e,t=!0,a=["*"]){null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);e=null!=e?e.toString():"";for(let l=0;l<this._instantLayers.length;l++){const a=this._instantLayers[l];if(a.opitem.id===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[l].featureset}const n=await this._loadMetaData();let i=null;for(const l of n.layers??[])null!==l.id&&void 0!==l.id&&l.id.toString()===e&&(i=l);if(!i)for(const l of n.tables??[])null!==l.id&&void 0!==l.id&&l.id.toString()===e&&(i=l);if(i){const e=await L(this._url+"/"+i.id,["*"]);return this._makeAndAddFeatureSet(e,t,a)}return null},t._createClass(a,[{key:"url",get:function(){return this._url}}]),a}(r);function O(e,t,a=null,r=null){return new k(e,t,a,r)}function D(e,t,a=null,r=null){return new E(e,t,a,r)}function v(e,t,a,r,i){if(null===e)return null;if(e instanceof _){switch(t){case"datasource":return g(e,i,e.outFields,!0,a,r).getDataSourceFeatureSet();case"parent":case"root":return g(e,i,e.outFields,!0,a,r)}return null}if(n.isSubtypeGrouplayer(e)){switch(t){case"datasource":return g(e,i,e.outFields,!0,a,r).getDataSourceFeatureSet();case"parent":case"root":return g(e,i,e.outFields,!0,a,r)}return null}if(n.isSubtypeSublayer(e)){switch(t){case"datasource":return g(e.parent,i,e.parent.outFields,!0,a,r).getDataSourceFeatureSet();case"parent":case"root":return g(e,i,e.parent.outFields,!0,a,r)}return null}if(e instanceof h)switch(t){case"datasource":return e.getDataSourceFeatureSet();case"parent":return e;case"root":return e.getRootFeatureSet()}return null}async function G(e,t,a,r,n,i,l,s=null){if(y.applicationCache){const o=y.applicationCache.getLayerInfo(e+":"+i.url);if(o){const e=await o;return g(new _({url:m.extractServiceUrl(e.url)+"/"+t,outFields:["*"]}),a,r,n,l,s)}}const o=new F({id:e,portal:i}).load();y.applicationCache&&y.applicationCache.setLayerInfo(e+":"+i.url,o);try{const e=await o;return g(new _({url:m.extractServiceUrl(e.url??"")+"/"+t,outFields:["*"]}),a,r,n,l,s)}catch(u){throw y.applicationCache&&y.applicationCache.clearLayerInfo(e+":"+i.url),u}}e.constructAssociationMetaDataFeatureSetFromUrl=b,e.constructFeatureSet=g,e.constructFeatureSetFromPortalItem=G,e.constructFeatureSetFromRelationship=T,e.constructFeatureSetFromUrl=I,e.convertToFeatureSet=v,e.createFeatureSetCollectionFromMap=O,e.createFeatureSetCollectionFromService=D,e.initialiseMetaDataCache=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));