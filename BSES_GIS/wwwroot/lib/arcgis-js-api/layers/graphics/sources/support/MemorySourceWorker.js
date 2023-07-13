/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Error","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../objectIdUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./clientSideDefaults","./sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,i,n,s,r,a,u,o,l,d,c,p,f){"use strict";const y=n.WGS84,m={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:n.WGS84},h={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function g(e){return i.isPoint(e)?null!=e.z:!!e.hasZ}function F(e){return i.isPoint(e)?null!=e.m:!!e.hasM}return function(){function n(){this._queryEngine=null,this._nextObjectId=null}var I=n.prototype;return I.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null},I.load=async function(e){const i=[],{features:n}=e,s=this._inferLayerProperties(n,e.fields),d=e.fields||[],g=null!=e.hasM?e.hasM:!!s.hasM,F=null!=e.hasZ?e.hasZ:!!s.hasZ,I=!e.spatialReference&&!s.spatialReference,b=I?y:e.spatialReference||s.spatialReference,E=I?m:null,_=e.geometryType||s.geometryType,j=!_;let T=e.objectIdField||s.objectIdField,x=e.timeInfo;if(!j&&(I&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new t("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new t("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&T!==s.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),T=s.objectIdField),T&&!s.objectIdField){let e=null;d.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):d.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const r of d){if(null==r.name&&(r.name=r.alias),null==r.alias&&(r.alias=r.name),!r.name)throw new t("feature-layer:invalid-field-name","field name is missing",{field:r});if(r.name===T&&(r.type="esriFieldTypeOID"),!p.kebabDict.jsonValues.includes(r.type))throw new t("feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}const R={};for(const t of d)if("esriFieldTypeOID"!==t.type&&"esriFieldTypeGlobalID"!==t.type){const e=f.getFieldDefaultValue(t);void 0!==e&&(R[t.name]=e)}if(this._fieldsIndex=new c(d),this._createDefaultAttributes=l.createDefaultAttributesFunction(R,T),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const S={warnings:i,featureErrors:[],layerDefinition:{...h,drawingInfo:l.createDrawingInfo(_),templates:l.createDefaultTemplate(R),extent:E,geometryType:_,objectIdField:T,fields:d,hasZ:F,hasM:g,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new o.QueryEngine({fields:d,geometryType:_,hasM:g,hasZ:F,objectIdField:T,spatialReference:b,featureStore:new a({geometryType:_,hasM:g,hasZ:F}),timeInfo:x,cacheSpatialQueries:!0}),!n||!n.length)return this._nextObjectId=r.initialObjectId,S;const q=r.findLastObjectIdFromFeatures(T,n);return this._nextObjectId=q+1,await u.checkProjectionSupport(n,b),this._loadInitialFeatures(S,n)},I.applyEdits=async function(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([d.loadGeometryEngineForSimplify(t,i),u.checkProjectionSupport(e.adds,t),u.checkProjectionSupport(e.updates,t)]),this._applyEdits(e)},I.queryFeatures=function(e,t={}){return this._queryEngine.executeQuery(e,t.signal)},I.queryFeatureCount=function(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)},I.queryObjectIds=function(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)},I.queryExtent=function(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)},I.querySnapping=function(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)},I._inferLayerProperties=function(e,t){let n,s,r=null,a=null,u=null;for(const o of e){const e=o.geometry;if(null!=e&&(r||(r=i.getJsonType(e)),a||(a=e.spatialReference),null==n&&(n=g(e)),null==s&&(s=F(e)),r&&a&&null!=n&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n}))&&(u=e.name)}return{geometryType:r,spatialReference:a,objectIdField:u,hasM:s,hasZ:n}},I._loadInitialFeatures=async function(e,t){const{geometryType:n,hasM:r,hasZ:a,objectIdField:o,spatialReference:l,featureStore:c}=this._queryEngine,p=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&n!==i.getJsonType(s.geometry)){e.featureErrors.push(d.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=d.mixAttributes(this._fieldsIndex,t,s.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[o]),null!=s.geometry&&(s.geometry=u.project(s.geometry,s.geometry.spatialReference,l)),p.push(s))}c.addMany(s.convertFromFeatures([],p,n,a,r,o));const{fullExtent:f,timeExtent:y}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,y){const{start:t,end:i}=y;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e},I._applyEdits=async function(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push(d.createFeatureEditSuccessResult(e));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:a,featureEditResults:s}},I._applyAddEdits=function(e,t){const{addResults:n}=e,{geometryType:r,hasM:a,hasZ:o,objectIdField:l,spatialReference:c,featureStore:p}=this._queryEngine,f=[];for(const s of t){if(s.geometry&&r!==i.getJsonType(s.geometry)){n.push(d.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=d.mixAttributes(this._fieldsIndex,t,s.attributes);if(a)n.push(a);else{if(this._assignObjectId(t,s.attributes),s.attributes=t,null!=s.uid){const t=s.attributes[l];e.uidToObjectId[s.uid]=t}if(null!=s.geometry){const e=s.geometry.spatialReference??c;s.geometry=u.project(d.simplify(s.geometry,e),e,c)}f.push(s),n.push(d.createFeatureEditSuccessResult(s.attributes[l]))}}p.addMany(s.convertFromFeatures([],f,r,o,a,l))},I._applyUpdateEdits=function({updateResults:e},t){const{geometryType:n,hasM:r,hasZ:a,objectIdField:o,spatialReference:l,featureStore:c}=this._queryEngine;for(const p of t){const{attributes:t,geometry:f}=p,y=t&&t[o];if(null==y){e.push(d.createFeatureEditErrorResult(`Identifier field ${o} missing`));continue}if(!c.has(y)){e.push(d.createFeatureEditErrorResult(`Feature with object id ${y} missing`));continue}const m=s.convertToFeature(c.getFeature(y),n,a,r);if(null!=f){if(n!==i.getJsonType(f)){e.push(d.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=f.spatialReference??l;m.geometry=u.project(d.simplify(f,t),t,l)}if(t){const i=d.mixAttributes(this._fieldsIndex,m.attributes,t);if(i){e.push(i);continue}}c.add(s.convertFromFeature(m,n,a,r,o)),e.push(d.createFeatureEditSuccessResult(y))}},I._assignObjectId=function(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++},e._createClass(n)}()}));
