/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../kernel","../../core/Collection","../../core/Error","../../core/Evented","../../core/HandleOwner","../../core/Logger","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Point","../../intl/messages","../../layers/support/CodedValueDomain","../../networks/UtilityNetwork","../../networks/support/utils","../../rest/networks/trace","../../rest/networks/support/TraceLocation","../../rest/networks/support/TraceParameters","./support/GeometryHandler","./support/GraphicHandler","./support/ResultAreaHandler"],(function(e,t,r,s,i,a,l,o,n,c,u,h,p,d,g,y,f,m,_,w,b,v,A,R,F){"use strict";const I=()=>y.fetchMessageBundle("esri/widgets/UtilityNetworkTrace/t9n/UtilityNetworkTrace"),k=()=>y.fetchMessageBundle("esri/core/t9n/Units");function T(e){return e instanceof f}function S(e){return"feature"===e.layer.type||"subtype-group"===e.layer.type}function H(e){return void 0!==e.layerViews}let G=function(t){function a(e){var r;return(r=t.call(this,e)||this)._activeProgress=!1,r._clickHandler=null,r._flags=[],r._geometryHandler=null,r._graphicHandler=null,r._highlightHandler=[],r._resultAreaHandler=null,r._traces=[],r._watchHandler=null,r.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},r.enableResultArea=!1,r.flags=[],r.gdbVersion="sde.DEFAULT",r.messages=null,r.messagesUnits=null,r.defaultResultAreaProperties={type:"convexhull",distance:10,unit:"meters",areaUnit:"square-meters",color:{color:[255,165,0,.5],haloOpacity:.9,fillOpacity:.2,hex:"#ffa500"},show:!1},r.selectedTraces=[],r.selectOnComplete=!0,r.showGraphicsOnComplete=!0,r.showSelectionAttributes=!0,r.traceResults=[],r.utilityNetwork=null,r}e._inherits(a,t);var l=a.prototype;return l.initialize=function(){this._geometryHandler=new A.GeometryHandler,this._graphicHandler=new R.GraphicHandler,this._resultAreaHandler=new F.ResultAreaHandler;(async()=>{const[e,t]=await Promise.all([I(),k()]);this.set({messages:e,messagesUnits:t})})()},l.destroy=function(){this.view=null},l.addFlagByHit=function(e,t){const r=e=>{this.view?.popup&&(this.view.popupEnabled=e)};return new Promise(((s,i)=>{r(!1),this._clickHandler?.remove(),this.emit("add-flag",{type:e}),this._clickHandler=this.view?.on("click",(a=>{this.queryFlagByHitTest(a,e,t).then((i=>{r(!0),this._clickHandler?.remove(),this.emit("add-flag-complete",{type:e,symbol:t}),s(i)})).catch((s=>{r(!0),this._clickHandler?.remove(),this.emit("add-flag-error",{type:e,symbol:t}),i(s)}))}))}))},l.addFlagsOnLoad=async function(){return new Promise((e=>{const t=[];this._watchHandler=n.when((()=>null!=this.view&&!this.view.updating),(async()=>{if(this._flags.length>0)e(t);else{const r=this.flags.map((async e=>{if(e.mapPoint){const r=new g({x:e.mapPoint.x,y:e.mapPoint.y,spatialReference:e.mapPoint.spatialReference.wkid}),s={screenPoint:this.view.toScreen(r),mapPoint:r};await this.queryFlagByHitTest(s,e.type)||("barrier"===e.type?t.push("barrier"):t.push("starting-point"))}}));await Promise.all(r),e(t)}}),{initial:!0})}))},l.addResultAreaToMap=function(e){if(e.resultArea.show=!0,null!==e.results?.aggregatedGeometry){const t=this._geometryHandler.mergeAggregatedToGeometries(e.results?.aggregatedGeometry);if(t.length>0){const r=Array(t.length).fill(e.resultArea?.distance);this.createResultAreaGeometries(e,t,r)}}else{const t=this._groupResultsByNetworkSource(e.results.elements),r=[];for(const e in t)r.push(this.queryFeaturesById(t[e]));Promise.all(r).then((t=>{const r=[];for(const e of t)for(const t of e)for(const e of t.featureSet.features)r.push(e.geometry);const s=Array(r.length).fill(e.resultArea?.distance);this.createResultAreaGeometries(e,r,s)})).catch((e=>{console.log(e)}))}},l.addResultGraphicToView=async function(e,t){const{view:r}=this,{results:s}=e;if(r&&s)for(const i in s.aggregatedGeometry)if("line,multipoint,polygon".includes(i)){const a=i,l=s.aggregatedGeometry[a];if(null!=l){l.spatialReference=this.utilityNetwork.spatialReference,e.graphicEnabled=!0;const s=await this._geometryHandler.projectGeometry(l,r.spatialReference),i={globalid:e.trace.globalId};if(null!==s){const e=this._graphicHandler.makeGraphic(s,t.color,i,r.spatialReference);r.graphics.add(e)}}}},l.addTerminal=function(e,t){const r=[...this._flags];r.forEach((r=>{r.globalId===t.globalId&&(t.selectedTerminals?.includes(parseInt(e,10))||r.selectedTerminals?.push(parseInt(e,10)))})),this._flags=r},l.callTrace=async function(){const e=this._traces.filter((e=>e.selected));return e.length>0&&(this.traceResults.length>0&&this.traceResults.forEach((e=>{this.removeResultGraphicFromView(e)})),this.traceResults=[],this.removeSelection(),await Promise.all(e.map((async(e,t)=>{const r=e,s=new v({gdbVersion:this.gdbVersion,moment:null,traceType:r.traceType,traceLocations:this._flags,namedTraceConfigurationGlobalId:r.globalId,traceConfiguration:null,outSpatialReference:null,resultTypes:null});await this.executeTrace(r,this.utilityNetwork.networkServiceUrl,s).then((e=>{if(e.hasOwnProperty("results")){const r={...e};if(null!==r.results){r.resultArea={...this.resultAreaProperties};const e=[...r.results.elements];r.results.elements.length=0;const s=new Map;for(const t of e)s.has(t.globalId)||(s.set(t.globalId,!0),r.results.elements.push(t));const i=[...this.traceResults];i.splice(t,0,r),this.traceResults=i,null!==r.results&&(this.selectOnComplete&&this.mergeSelection(!0,r.trace),this.showGraphicsOnComplete&&this.addResultGraphicToView(r,r.graphicColor),this.enableResultArea&&r.resultArea.show&&this.addResultAreaToMap(r))}else{const r=[...this.traceResults];r.splice(t,0,e),this.traceResults=r}this._activeProgress=!1}else{this._activeProgress=!1;const r=[...this.traceResults];r.splice(t,0,e),this.traceResults=r}})).catch((e=>{throw this._activeProgress=!1,e}))}))),!0)},l.changeResultAreaColor=function(e,t){var r;e.resultArea&&((r=e.resultArea).color??(r.color=t),this._resultAreaHandler?.changeResultAreaColor(e.trace.globalId,t,this.view.map))},l.changeResultGraphicColor=function(e,t){const r=[...this.traceResults];r.length>0&&r.forEach((r=>{r.trace.globalId===t.trace.globalId&&(r.graphicColor=e,r.graphicEnabled=!0)})),this.traceResults=r,this.removeResultGraphicFromView(t),this.addResultGraphicToView(t,e)},l.changeFlagSymbol=function(e,t){this._flags.length>0&&this._flags.forEach((r=>{r.type===e&&t&&r.mapGraphic&&(r.mapGraphic.symbol=t)}))},l.checkCanTrace=function(){const e={status:!0,issues:[]};let t=!1;const r=this._flags.some((e=>"starting-point"===e.type)),s=this._flags.filter((e=>null!==e.allTerminals));s.length>0&&(t=s.some((e=>e.selectedTerminals.length<=0)));let i=[];return r?(i=this._traces.filter((e=>e.selected)),i.length<=0?(e.status=!1,e.issues=["noTrace"],t&&(e.status=!1,e.issues=["noTrace","noTerminalSelected"])):t&&(e.status=!1,e.issues=["noTerminalSelected"])):(i=this._traces.filter((e=>!0===e.selected)),i.length>0?(e.status=!1,e.issues=["noStart"],t&&(e.status=!1,e.issues=["noStart","noTerminalSelected"])):(e.status=!1,e.issues=["noStart","noTrace"],t&&(e.status=!1,e.issues=["noStart","noTrace","noTerminalSelected"]))),e},l.checkSelectionExist=function(){let e=!1;return this._highlightHandler.some((t=>{t&&(e=!0)})),e},l.clearResult=function(e){if(!this.view)return;let t=this.traceResults;if(t.length>0){const r=t.filter((t=>t.trace.globalId===e.globalId));r.length>0&&(this.removeResultGraphicFromView(r[0]),this.removeResultAreaFromMap(r[0])),t=t.filter((t=>t.trace.globalId!==e.globalId))}this.traceResults=t,0===t.length?(this._resultAreaHandler?.removeResultAreaGrahicsLayer(this.view.map),this.removeSelection(),this.emit("clear-selection",{resultSet:[]})):this.mergeSelection(!1,e)},l.createResultAreaGeometries=function(e,t,r){if(!this.view||!this.resultAreaProperties)return;let s;if("convexhull"===this.resultAreaProperties?.type?s=this._resultAreaHandler?.createConvexHull(t,e.resultArea?.distance,e.resultArea?.unit):t&&(s=this._resultAreaHandler?.createBuffer(t,r,e.resultArea?.unit,!0)),s&&Array.isArray(s)){if(s.length>0)for(const i of s){const t=this.getResultAreaAttributes(e,i),r=this._resultAreaHandler?.createResultAreaGraphic(i,t,e.resultArea?.areaUnit,this.messages,this.messagesUnits,e.resultArea?.color);r&&this._resultAreaHandler?.addResultAreaToMap(r,this.view.map)}}else{const t=this.getResultAreaAttributes(e,s),r=this._resultAreaHandler?.createResultAreaGraphic(s,t,e.resultArea?.areaUnit,this.messages,this.messagesUnits,e.resultArea?.color);r&&this._resultAreaHandler?.addResultAreaToMap(r,this.view.map)}},l.executeTrace=function(e,t,r){const s=this._processFlags(r.traceLocations);return r.traceLocations=s,w.trace(t,r).then((t=>({trace:e,results:t,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:"success",date:new Date}))).catch((t=>({trace:e,results:null,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:t.message,date:new Date})))},l.getResultAreaAttributes=function(e,t){const{messages:s}=this,i=[],a=[];this._flags.forEach((e=>{const t=e.displayValue?.field+":"+e.displayValue?.value+";"+s.attributeStrings.globalid+":"+e.globalId+";"+s.attributeStrings.terminalid+":"+e.terminalId+";"+s.attributeStrings.x+":"+e.mapPoint?.x+";"+s.attributeStrings.y+":"+e.mapPoint?.y;"starting-point"===e.type?i.push(t):a.push(t)}));return{traceId:e.trace.globalId,traceName:e.trace.title,traceDescription:e.trace.description??"",startingPoints:i.toString(),barriers:a.toString(),version:this.gdbVersion,username:r.id.credentials[0].userId,date:e.date,elementCount:e.results?.elements.length,functionResult:JSON.stringify(e.results?.globalFunctionResults),areaStatistic:this._geometryHandler.calculateArea(t,e.resultArea?.areaUnit)}},l.getValidSources=function(){let e=[];const t=this.utilityNetwork.dataElement?.domainNetworks??[];for(const r of t)e=e.concat(r.junctionSources),e=e.concat(r.edgeSources);return e},l.loadUtilityNetwork=async function(){const{view:e}=this;if(!e)return null;if(await e.when(),this.utilityNetwork){if(this.utilityNetwork.loaded||await this.utilityNetwork.load(),this.utilityNetwork instanceof m){try{const t=e.map;await t.loadAll(),this._populateOutfields()}catch(s){this._populateOutfields()}return this.utilityNetwork}return null}const t=e.map,r=t.utilityNetworks?.at(0);if(r){await r.load(),this.utilityNetwork=r;try{await t.loadAll(),this._populateOutfields()}catch(s){}finally{this._populateOutfields()}return r}return null},l.manageFilterBarrier=function(e,t){const r=[...this._flags];r.forEach((r=>{r.globalId===t.globalId&&"barrier"===t.type&&r.id===t.id&&(r.isFilterBarrier=e)})),this._flags=r},l.mergeSelection=function(e,t){let r=[];const s=[...this.traceResults],i=t.globalId;s.forEach((t=>{i===t.trace.globalId&&(t.selectionEnabled=e),t.selectionEnabled&&null!=t.results&&null!==t.results.elements&&(r=[...r,...t.results.elements??[]])})),this.selectResults([...new Set(r)])},l.queryFeaturesById=async function(e){const{view:t}=this;if(!t)return null;const r=_.getObjectIdsFromElements(this.utilityNetwork,e),i=this._getUniqueMapLayerViews(t),a={layerUrl:r[0].layerUrl,objectIds:r[0].objectIds,outFields:["*"]},l=i.filter((e=>e.layer?.parsedUrl?.path===r[0].layerUrl));if(l.length>0){const e=(await Promise.all(l.map((async e=>{const r=new s,i=e.layer;r.add(i);const l={layers:r,layerInfos:[a],returnGeometry:!0,outSpatialReference:t.spatialReference};return(await _.getFeaturesFromLayers(l))[0]})))).filter((e=>e.featureSet.features.length>0));return e.length>0?e:null}return null},l.queryFlagByHitTest=function(e,t,r){return this._lookupFlagByHit(e).then((e=>{const{view:s}=this;if(!s)return!1;if(e.length>0){const i=[...this._flags],a=r;return e.forEach((e=>{const r=e.graphic,l=r.attributes.hasOwnProperty("GLOBALID")?r.attributes.GLOBALID:r.attributes.globalid;if(i.filter((e=>e.globalId===l)).length<=0){const e=this._graphicHandler.getFlagGraphic(r.mapPoint,t,r,a);s.graphics.add(e),i.push({...r,type:t,globalId:r.attributes.globalid||r.attributes.GLOBALID,details:r,mapGraphic:e,id:i.length+1})}else if(null!==r.percentAlong){const e=this._graphicHandler.getFlagGraphic(r.mapPoint,t,r,a);s.graphics.add(e),i.push({...r,type:t,globalId:r.attributes.globalid||r.attributes.GLOBALID,details:r,mapGraphic:e,id:i.length+1})}})),this._flags=i,!0}return!1}))},l.removeResultGraphicFromView=function(e){const{view:t}=this;if(!t)return;const r=t.graphics;e.graphicEnabled=!1;r.filter((t=>t.attributes[t.attributes.hasOwnProperty("GLOBALID")?"GLOBALID":"globalid"]===e.trace.globalId)).forEach((e=>{t.graphics.remove(e)}))},l.removeFlag=function(e){const t=this._flags.filter((t=>{if(t.id!==e.id)return t}));this._removeGraphic(e),this._flags=t},l.removeResultAreaGrahicsLayer=function(){this._resultAreaHandler?.removeResultAreaGrahicsLayer(this.view.map)},l.removeResultAreaFromMap=function(e){e.resultArea.show=!1,this._resultAreaHandler?.removeResultArea(e.trace.globalId,this.view?.map)},l.removeSelection=function(){this._highlightHandler.forEach((e=>{e&&e.remove()})),this._highlightHandler=[]},l.removeTerminal=function(e,t){const r=[...this._flags];r.forEach((r=>{if(r.globalId===t.globalId&&t.selectedTerminals?.includes(parseInt(e,10))){const s=t.selectedTerminals.indexOf(parseInt(e,10));r.selectedTerminals?.splice(s,1)}})),this._flags=r},l.removeFlagsOnLoadWatcher=function(){this._watchHandler&&null!==this._watchHandler&&this._watchHandler.remove()},l.reset=function(){this._flags=[],this.traceResults=[];const e=[...this._traces];e.forEach((e=>{e.selected=!1})),this._traces=e,this.view&&(this.view.graphics.removeAll(),this.removeResultAreaGrahicsLayer(),this.removeSelection(),this.emit("clear-selection",{resultSet:[]}))},l.selectFeaturesById=function(e){const{view:t}=this;if(!t)return;const r=_.getObjectIdsFromElements(this.utilityNetwork,e);this._getUniqueMapLayerViews(t).forEach((e=>{e.layer?.parsedUrl?.path===r[0].layerUrl&&S(e)&&this._highlightHandler.push(e.highlight(r[0].objectIds))}))},l.selectResults=function(e){if(e.length>0){this.removeSelection();const t=this._groupResultsByNetworkSource(e),r=[];for(const e in t)this.selectFeaturesById(t[e]),r.push(this.queryFeaturesById(t[e]));Promise.all(r).then((e=>{this.emit("select-features",{resultSet:e})}))}else this.removeSelection(),this.emit("clear-selection",{resultSet:[]})},l.selectTraces=function(e,t){const r=[...this._traces];r.forEach((r=>{t===r.globalId&&(r.selected=e)})),this._traces=r},l.selectTracesOnLoad=function(){this.utilityNetwork.hasOwnProperty("sharedNamedTraceConfigurations")&&(this._traces=[...this.utilityNetwork.sharedNamedTraceConfigurations],this._traces.forEach((e=>{e.selected=!1,this.selectedTraces.includes(e.globalId)&&(e.selected=!0)})))},l.zoomToAsset=function(e){this.view?.goTo(e).catch((e=>console.error(e)))},l._getUniqueMapLayerViews=function(e){const t=[];return e.layerViews.filter((({layer:{type:e}})=>"feature"===e||"group"===e||"subtype-group"===e)).forEach((e=>{switch(e.layer.type){case"group":if(H(e))for(const r of e.layerViews)t.push(r);break;case"subtype-group":t.push(e);break;default:t.some((t=>t.layer.id===e.layer.id))||t.push(e)}})),t},l._processFlags=function(e){const t=[];return e.forEach((e=>{if(null!==e.selectedTerminals&&e.selectedTerminals.length>0)e.selectedTerminals.forEach((r=>{const s=new b({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:r,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(s)}));else{const r=new b({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:null,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(r)}})),t},l._getDisplayField=function(e){return"subtype-sublayer"===e?.layer?.type?this._getDisplayFieldBySublayer(e):this._getDisplayFieldByFeatureLayer(e)},l._getDisplayFieldBySublayer=function(e){let t="",r="";const s=e.layer;t=this._checkParentForData(s,"displayField");for(const i in e.attributes){const a=i.toLowerCase();a===t?.toLowerCase()?(r=e.attributes[i],"assetgroup"===a||"assettype"===a?r=this._checkSubtype(s,s.subtypeCode):(r=this._checkDomain(s.fields,i,r),"string"==typeof r&&(r=this._defaultDisplayField(r,s)))):(r=this._checkDomain(s.fields,i,r),"string"==typeof r&&(r=this._defaultDisplayField(r,s)))}return{field:t,value:r.toString()}},l._getDisplayFieldByFeatureLayer=function(e){const t=e.layer;let r=t.displayField,s="";for(const i in e.attributes){const a=i.toLowerCase();if(a===r?.toLowerCase())if(s=e.attributes[i],"assetgroup"===a||"assettype"===a){let a=e.attributes[t.typeIdField.toUpperCase()];a||(a=e.attributes[t.typeIdField.toLowerCase()]),r=t.typeIdField,s=this._checkSubtype(t,a),""===r&&(t.templates&&t.templates.length>0?(r=t.templates[0]?.name,s=t.templates[0]?.name):(r=t.displayField,s=e.attributes[i]))}else s=this._checkDomain(t.fields,i,s),"string"==typeof s&&(s=this._defaultDisplayField(s,t));else s=this._checkDomain(t.fields,i,s),"string"==typeof s&&(s=this._defaultDisplayField(s,t))}return{field:r,value:s?s.toString():""}},l._checkSubtype=function(e,t){let r=t;if("subtype-sublayer"===e.type){const s=this._checkParentForData(e,"subtypes");s?.length>0&&s.forEach((e=>{e.code===t&&(r=e.name)}))}else if(null!=e.types&&e.types.length>0){const s=e.types.filter((e=>e.id===t));s.length>0&&(r=s[0].name)}return r},l._checkDomain=function(e,t,r){let s=r;const i=e.filter((e=>e.name.toLowerCase()===t.toLowerCase()));if(i.length>0&&T(i[0].domain)&&i[0].domain?.codedValues){const e=i[0].domain.codedValues.filter((({code:e})=>e===r));e.length>0&&(s=e[0].name)}return s},l._checkParentForData=function(e,t){return e.parent?.[t]??null},l._defaultDisplayField=function(e,t){return e.trim()?e:t.templates&&t.templates?.length>0?t.templates[0].name:t.title},l._groupBy=function(e,t){return e.reduce(((e,r)=>((e[r[t]]=e[r[t]]||[]).push(r),e)),{})},l._groupResultsByNetworkSource=function(e){if(e.length>0){return this._groupBy(e,"networkSourceId")}return[]},l._lookupFlagByHit=function(e){return this.view.hitTest(e.screenPoint).then((t=>{const r=[];if(t.results.length>0){const s=t.results.find((e=>null!==e.layer));if(s.graphic&&null!=s.graphic.geometry)if("polyline"===s.graphic.geometry.type){const t=this._geometryHandler.getPercentageAlong(s.graphic.geometry,e.mapPoint,s.graphic.geometry.spatialReference),i=this._getDisplayField(s.graphic);s.graphic.terminalId=null,s.graphic.isFilterBarrier=!1,s.graphic.allTerminals=null,s.graphic.selectedTerminals=null,s.graphic.percentAlong=t,s.graphic.displayValue=i,s.graphic.mapPoint=s.mapPoint,r.push(s)}else if(("point"===s.graphic.geometry.type||"polygon"===s.graphic.geometry.type)&&null!==this.utilityNetwork){const e=this.utilityNetwork.getTerminalConfiguration(s.graphic),t=this._getDisplayField(s.graphic);s.graphic.terminalId=e?e.terminals[0].id||null:1,s.graphic.isFilterBarrier=!1,s.graphic.allTerminals=e??null,s.graphic.selectedTerminals=[e?e.terminals[0].id||null:1],s.graphic.percentAlong=null,s.graphic.displayValue=t,s.graphic.mapPoint=s.mapPoint,r.push(s)}}return r}))},l._populateOutfields=async function(){const e=this.view?.map,t=this.getValidSources();e?.layers.forEach((e=>{"group"===e.type?e.layers.forEach((e=>{t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])})):t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])}))},l._removeGraphic=function(e){this.view?.graphics.remove(e.mapGraphic)},e._createClass(a,[{key:"resultAreaProperties",get:function(){return this.defaultResultAreaProperties},set:function(e){this._set("resultAreaProperties",{...this.defaultResultAreaProperties,...e})}},{key:"state",get:function(){return this.view?.ready?"ready":"loading"}},{key:"view",get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&o.getLogger(this).error(new i("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)}}]),a}(l.HandleOwnerMixin(a.EventedAccessor));t.__decorate([c.property()],G.prototype,"_activeProgress",void 0),t.__decorate([c.property()],G.prototype,"_flags",void 0),t.__decorate([c.property()],G.prototype,"_traces",void 0),t.__decorate([c.property()],G.prototype,"defaultGraphicColor",void 0),t.__decorate([c.property()],G.prototype,"enableResultArea",void 0),t.__decorate([c.property()],G.prototype,"flags",void 0),t.__decorate([c.property()],G.prototype,"gdbVersion",void 0),t.__decorate([c.property()],G.prototype,"messages",void 0),t.__decorate([c.property()],G.prototype,"messagesUnits",void 0),t.__decorate([c.property()],G.prototype,"resultAreaProperties",null),t.__decorate([c.property()],G.prototype,"selectedTraces",void 0),t.__decorate([c.property()],G.prototype,"selectOnComplete",void 0),t.__decorate([c.property()],G.prototype,"showGraphicsOnComplete",void 0),t.__decorate([c.property()],G.prototype,"showSelectionAttributes",void 0),t.__decorate([c.property({readOnly:!0})],G.prototype,"state",null),t.__decorate([c.property()],G.prototype,"traceResults",void 0),t.__decorate([c.property()],G.prototype,"utilityNetwork",void 0),t.__decorate([c.property({value:null})],G.prototype,"view",null),G=t.__decorate([d.subclass("esri.widgets.UtilityNetworkTrace.UtilityNetworkTraceViewModel")],G);return G}));
