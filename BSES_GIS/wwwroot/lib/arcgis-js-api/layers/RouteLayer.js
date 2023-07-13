/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../geometry","../Graphic","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/PieChartRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../core/Collection","../core/Error","../core/HandleOwner","../core/Logger","../core/MultiOriginJSONSupport","../core/object","../core/promiseUtils","../core/reactiveUtils","../core/unitUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/originUtils","../geometry/Extent","../geometry/projection","../geometry/support/spatialReferenceUtils","./Layer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/arcgisLayerUrl","./support/RouteSymbols","../portal/Portal","../portal/PortalItem","../portal/support/portalItemUtils","../rest/networkService","../rest/route","../rest/support/DirectionLine","../rest/support/DirectionPoint","../rest/support/PointBarrier","../rest/support/PolygonBarrier","../rest/support/PolylineBarrier","../rest/support/RouteInfo","../rest/support/RouteParameters","../rest/support/RouteSettings","../rest/support/Stop","../geometry/SpatialReference","../geometry/Multipoint"],(function(e,t,r,o,i,n,s,l,a,u,p,c,y,d,f,m,h,w,S,g,_,b,v,B,P,I,N,R,L,D,C,O,F,T,k,x,A,G,J,M,U,j,q,W,E,V,H,z,K,Q,Y,Z,$,X,ee,te,re,oe,ie){"use strict";function ne(e){return e.length?e:null}function se(e){switch(e){case"esriGeometryPoint":return{type:"esriSMS",style:"esriSMSCircle",size:12,color:[0,0,0,0],outline:se("esriGeometryPolyline")};case"esriGeometryPolyline":return{type:"esriSLS",style:"esriSLSSolid",width:1,color:[0,0,0,0]};case"esriGeometryPolygon":return{type:"esriSFS",style:"esriSFSNull",outline:se("esriGeometryPolyline")}}}function le(e){return"layers"in e}function ae(e){return"esri.rest.support.FeatureSet"===e.declaredClass}function ue(e){return"esri.rest.support.NetworkFeatureSet"===e.declaredClass}function pe(e,t,r){const o=t.networkDataset?.networkAttributes,i=o?.filter((({usageType:e})=>"cost"===e))??[],n=r.travelMode??t.defaultTravelMode;if(null==n)return void ve.warn("route-layer:missing-travel-mode","The routing service must have a default travel mode or one must be specified in the route parameter.");const{timeAttributeName:s,distanceAttributeName:l}=n,a=i.find((({name:e})=>e===s)),u=i.find((({name:e})=>e===l)),p=r.travelMode?.impedanceAttributeName??r.impedanceAttribute??t.impedance,c=a?.units,y=u?.units;if(!c||!y)throw new h("routelayer:unknown-impedance-units","the units of either the distance or time impedance are unknown");const d=r.directionsLanguage??t.directionsLanguage,f=r.accumulateAttributes??t.accumulateAttributeNames??[],m=new Set(i.filter((({name:e})=>e===s||e===l||e===p||null!=e&&f.includes(e))).map((({name:e})=>e))),w=e=>{for(const t in e)m.has(t)||delete e[t]};for(const h of e.pointBarriers)null!=h.costs&&(h.addedCost=h.costs[p]??0,w(h.costs));for(const h of e.polygonBarriers)null!=h.costs&&(h.scaleFactor=h.costs[p]??1,w(h.costs));for(const h of e.polylineBarriers)null!=h.costs&&(h.scaleFactor=h.costs[p]??1,w(h.costs));const{routeInfo:S}=e,{findBestSequence:g,preserveFirstStop:_,preserveLastStop:b,startTimeIsUTC:v,timeWindowsAreUTC:B}=r;S.analysisSettings=new te({accumulateAttributes:f,directionsLanguage:d,findBestSequence:g,preserveFirstStop:_,preserveLastStop:b,startTimeIsUTC:v,timeWindowsAreUTC:B,travelMode:n}),S.totalDuration=ye(S.totalCosts?.[s]??0,c),S.totalDistance=de(S.totalCosts?.[l]??0,y),S.totalLateDuration=ye(S.totalViolations?.[s]??0,c),S.totalWaitDuration=ye(S.totalWait?.[s]??0,c),null!=S.totalCosts&&w(S.totalCosts),null!=S.totalViolations&&w(S.totalViolations),null!=S.totalWait&&w(S.totalWait);for(const h of e.stops)null!=h.serviceCosts&&(h.serviceDuration=ye(h.serviceCosts[s]??0,c),h.serviceDistance=de(h.serviceCosts[l]??0,y),w(h.serviceCosts)),null!=h.cumulativeCosts&&(h.cumulativeDuration=ye(h.cumulativeCosts[s]??0,c),h.cumulativeDistance=de(h.cumulativeCosts[l]??0,y),w(h.cumulativeCosts)),null!=h.violations&&(h.lateDuration=ye(h.violations[s]??0,c),w(h.violations)),null!=h.wait&&(h.waitDuration=ye(h.wait[s]??0,c),w(h.wait))}async function ce(e){const t=oe.WGS84;return await k.initializeProjection(e.spatialReference,t),k.project(e,t)}function ye(e,t){switch(t){case"seconds":return e/60;case"hours":return 60*e;case"days":return 60*e*24;default:return e}}function de(e,t){return"decimal-degrees"===t||"points"===t||"unknown"===t?e:B.convertUnit(e,t,"meters")}function fe(e){const{attributes:t,geometry:r,popupTemplate:o,symbol:i}=e.toGraphic().toJSON();return{attributes:t,geometry:r,popupInfo:o,symbol:i}}const me=m.ofType(K),he=m.ofType(Q),we=m.ofType(Y),Se=m.ofType(Z),ge=m.ofType($),_e=m.ofType(re),be="esri.layers.RouteLayer",ve=S.getLogger(be);let Be=function(t){function o(e){var r;(r=t.call(this,e)||this)._cachedServiceDescription=null,r._featureCollection=null,r._type="Feature Collection",r.defaultSymbols=new q,r.directionLines=null,r.directionPoints=null,r.featureCollectionType="route",r.legendEnabled=!1,r.maxScale=0,r.minScale=0,r.pointBarriers=new we,r.polygonBarriers=new Se,r.polylineBarriers=new ge,r.routeInfo=null,r.spatialReference=oe.WGS84,r.stops=new _e,r.type="route";const o=()=>{r._setStopSymbol(r.stops)};return r.addHandles(v.on((()=>r.stops),"change",o,{sync:!0,onListenerAdd:o})),r}e._inherits(o,t);var s=o.prototype;return s.writeFeatureCollectionWebmap=function(e,t,r,o){const i=[this._writePolygonBarriers(),this._writePolylineBarriers(),this._writePointBarriers(),this._writeRouteInfo(),this._writeDirectionLines(),this._writeDirectionPoints(),this._writeStops()].filter((e=>!!e)),n=i.map(((e,t)=>t)),s="web-map"===o.origin?"featureCollection.layers":"layers";_.setDeepValue(s,i,t),t.opacity=this.opacity,t.visibility=this.visible,t.visibleLayers=n},s.readDirectionLines=function(e,t){return this._getNetworkFeatures(t,"DirectionLines",(e=>K.fromGraphic(e)))},s.readDirectionPoints=function(e,t){return this._getNetworkFeatures(t,"DirectionPoints",(e=>Q.fromGraphic(e)))},s.readMaxScale=function(e,t){const r=le(t)?t.layers:t.featureCollection?.layers,o=r?.find((e=>null!=e.layerDefinition.maxScale));return o?.layerDefinition.maxScale??0},s.readMinScale=function(e,t){const r=le(t)?t.layers:t.featureCollection?.layers,o=r?.find((e=>null!=e.layerDefinition.minScale));return o?.layerDefinition.minScale??0},s.readPointBarriers=function(e,t){return this._getNetworkFeatures(t,"Barriers",(e=>Y.fromGraphic(e)))},s.readPolygonBarriers=function(e,t){return this._getNetworkFeatures(t,"PolygonBarriers",(e=>Z.fromGraphic(e)))},s.readPolylineBarriers=function(e,t){return this._getNetworkFeatures(t,"PolylineBarriers",(e=>$.fromGraphic(e)))},s.readRouteInfo=function(e,t){const r=this._getNetworkFeatures(t,"RouteInfo",(e=>X.fromGraphic(e)));return r.length>0?r.at(0):null},s.readSpatialReference=function(e,t){const r=le(t)?t.layers:t.featureCollection?.layers;if(!r?.length)return oe.WGS84;const{layerDefinition:o,featureSet:i}=r[0],n=i.features[0],s=n?.geometry?.spatialReference??i.spatialReference??o.spatialReference??o.extent.spatialReference??x.WGS84;return oe.fromJSON(s)},s.readStops=function(e,t){return this._getNetworkFeatures(t,"Stops",(e=>re.fromGraphic(e)),(e=>this._setStopSymbol(e)))},s.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)},s.removeAll=function(){this.removeResult(),this.pointBarriers.removeAll(),this.polygonBarriers.removeAll(),this.polylineBarriers.removeAll(),this.stops.removeAll()},s.removeResult=function(){null!=this.directionLines&&(this.directionLines.removeAll(),this._set("directionLines",null)),null!=this.directionPoints&&(this.directionPoints.removeAll(),this._set("directionPoints",null)),null!=this.routeInfo&&this._set("routeInfo",null)},s.save=async function(){await this.load();const{fullExtent:e,portalItem:t}=this;if(!t)throw new h("routelayer:portal-item-not-set","save() requires to the layer to have a portal item");if(!t.id)throw new h("routelayer:portal-item-not-saved","Please use saveAs() first to save the routelayer");if("Feature Collection"!==t.type)throw new h("routelayer:portal-item-wrong-type",'Portal item needs to have type "Feature Collection"');if(null==this.routeInfo)throw new h("routelayer:route-unsolved","save() requires a solved route");const{portal:r}=t;await r.signIn(),r.user||await t.reload();const{itemUrl:o,itemControl:i}=t;if("admin"!==i&&"update"!==i)throw new h("routelayer:insufficient-permissions","To save this layer, you need to be the owner or an administrator of your organization");const n={messages:[],origin:"portal-item",portal:r,url:o?P.urlToObject(o):void 0,writtenProperties:[]},s=this.write(void 0,n);return t.extent=await ce(e),t.title=this.title,await t.update({data:s}),t},s.saveAs=async function(e,t={}){if(await this.load(),null==this.routeInfo)throw new h("routelayer:route-unsolved","saveAs() requires a solved route");const r=E.from(e).clone();r.extent??(r.extent=await ce(this.fullExtent)),r.id=null,r.portal??(r.portal=W.getDefault()),r.title??(r.title=this.title),r.type="Feature Collection",r.typeKeywords=["Data","Feature Collection",V.TypeKeyword.MULTI_LAYER,"Route Layer"];const{portal:o}=r,i={messages:[],origin:"portal-item",portal:o,url:null,writtenProperties:[]};await o.signIn();const n=t?.folder,s=this.write(void 0,i);return await(o.user?.addItem({item:r,folder:n,data:s})),this.portalItem=r,F.updateOrigins(i),i.portalItem=r,r},s.solve=async function(e,t){const r=e?.stops??this.stops,o=e?.pointBarriers??ne(this.pointBarriers),i=e?.polylineBarriers??ne(this.polylineBarriers),n=e?.polygonBarriers??ne(this.polygonBarriers);if(null==r)throw new h("routelayer:undefined-stops","the route layer must have stops defined in the route parameters.");if((ae(r)||ue(r))&&r.features.length<2||m.isCollection(r)&&r.length<2)throw new h("routelayer:insufficent-stops","the route layer must have two or more stops to solve a route.");if(m.isCollection(r))for(const m of r)m.routeName=null;const s=e?.apiKey,l=this.url,a=await this._getServiceDescription(l,s,t),u=e?.travelMode??a.defaultTravelMode,p=e?.accumulateAttributes??[];null!=u&&(p.push(u.distanceAttributeName),u.timeAttributeName&&p.push(u.timeAttributeName));const c={startTime:new Date},y={accumulateAttributes:p,directionsOutputType:"featuresets",ignoreInvalidLocations:!0,pointBarriers:o,polylineBarriers:i,polygonBarriers:n,preserveFirstStop:!0,preserveLastStop:!0,returnBarriers:!!o,returnDirections:!0,returnPolygonBarriers:!!n,returnPolylineBarriers:!!i,returnRoutes:!0,returnStops:!0,stops:r},d=e?ee.from(e):new ee;for(const m in c)null==d[m]&&(d[m]=c[m]);let f;d.set(y);try{f=await z.solve(l,d,t)}catch(S){throw b.isAbortError(S)?S:new h("routelayer:failed-route-request","the routing request failed",{error:S})}const w=this._toRouteLayerSolution(f);return this._isOverridden("title")||(this.title=w.routeInfo.name??"Route"),pe(w,a,d),w},s.update=function(e){const{stops:t,directionLines:r,directionPoints:o,pointBarriers:i,polylineBarriers:n,polygonBarriers:s,routeInfo:l}=e;this.set({stops:t,pointBarriers:i,polylineBarriers:n,polygonBarriers:s}),this._set("directionLines",r),this._set("directionPoints",o),this._set("routeInfo",l),null!=l.geometry&&(this.spatialReference=l.geometry.spatialReference)},s._getNetworkFeatures=function(e,t,r,o){const s=le(e)?e.layers:e.featureCollection?.layers,l=s?.find((e=>e.layerDefinition.name===t));if(null==l)return new m;const{layerDefinition:a,popupInfo:u,featureSet:p}=l,c=a.drawingInfo.renderer,{features:y}=p,d=p.spatialReference??a.spatialReference??a.extent.spatialReference??x.WGS84,h=c&&f.read(c),w=oe.fromJSON(d),S=y.map((e=>{const o=i.fromJSON(e);null!=o.geometry&&null!=e.geometry&&null==e.geometry.spatialReference&&(o.geometry.spatialReference=w);const s=r(o);return s.symbol??(s.symbol=h?.getSymbol(o)??this._getNetworkSymbol(t)),s.popupTemplate??(s.popupTemplate=u&&n.fromJSON(u)),s}));return o&&S.some((e=>!e.symbol))&&o(S),new m(S)},s._getNetworkSymbol=function(e){switch(e){case"Barriers":return this.defaultSymbols.pointBarriers;case"DirectionPoints":return this.defaultSymbols.directionPoints;case"DirectionLines":return this.defaultSymbols.directionLines;case"PolylineBarriers":return this.defaultSymbols.polylineBarriers;case"PolygonBarriers":return this.defaultSymbols.polygonBarriers;case"RouteInfo":return this.defaultSymbols.routeInfo;case"Stops":return null}},s._getServiceDescription=async function(e,t,r){if(null!=this._cachedServiceDescription&&this._cachedServiceDescription.url===e)return this._cachedServiceDescription.serviceDescription;const o=await H.fetchServiceDescription(e,t,r);return this._cachedServiceDescription={serviceDescription:o,url:e},o},s._setStopSymbol=function(e){if(!e||0===e.length)return;if(null==this.defaultSymbols.stops)return;if(e.every((({symbol:e})=>null!=e)))return;const{first:t,last:r,middle:o,unlocated:i,waypoint:n,break:s}=this.defaultSymbols.stops;if(null==this.routeInfo||1===e.length)return void e.forEach(((i,n)=>{switch(n){case 0:i.symbol=t;break;case e.length-1:i.symbol=r;break;default:i.symbol=o}}));const l=e.map((({sequence:e})=>e)).filter((e=>null!=e)),a=Math.min(...l),u=Math.max(...l);for(const p of e)p.sequence!==a?p.sequence!==u?"ok"===p.status||"not-located-on-closest"===p.status?"waypoint"!==p.locationType?"break"!==p.locationType?p.symbol=o:p.symbol=s:p.symbol=n:p.symbol=i:p.symbol=r:p.symbol=t},s._toRouteLayerSolution=function(e){const t=e.routeResults[0].stops?.map((e=>re.fromJSON(e.toJSON())));this._setStopSymbol(t);const r=new _e(t),o=new Se(e.polygonBarriers?.map((e=>{const t=Z.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polygonBarriers,t}))),i=new ge(e.polylineBarriers?.map((e=>{const t=$.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polylineBarriers,t}))),n=new we(e.pointBarriers?.map((e=>{const t=Y.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.pointBarriers,t}))),s=e.routeResults[0].route?.toJSON(),l=X.fromJSON(s);l.symbol=this.defaultSymbols.routeInfo;const a=new he(e.routeResults[0].directionPoints?.features.map((e=>{const t=Q.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionPoints,t})));return{directionLines:new me(e.routeResults[0].directionLines?.features.map((e=>{const t=K.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionLines,t}))),directionPoints:a,pointBarriers:n,polygonBarriers:o,polylineBarriers:i,routeInfo:l,stops:r}},s._writeDirectionLines=function(){return this._writeNetworkFeatures(this.directionLines,this.defaultSymbols.directionLines,"esriGeometryPolyline",K.fields,K.popupInfo,"DirectionLines","Direction Lines")},s._writeDirectionPoints=function(){return this._writeNetworkFeatures(this.directionPoints,this.defaultSymbols.directionPoints,"esriGeometryPoint",Q.fields,Q.popupInfo,"DirectionPoints","Direction Points")},s._writeNetworkFeatures=function(e,t,r,o,i,n,s){if(null==e||!e.length)return null;const l=this.spatialReference.toJSON(),{fullExtent:a,maxScale:u,minScale:p}=this;return{featureSet:{features:e.toArray().map((e=>fe(e))),geometryType:r,spatialReference:l},layerDefinition:{capabilities:"Query,Update,Editing",drawingInfo:{renderer:{type:"simple",symbol:null!=t?t.toJSON():se(r)}},extent:a.toJSON(),fields:o,geometryType:r,hasM:!1,hasZ:!1,maxScale:u,minScale:p,name:n,objectIdField:"ObjectID",spatialReference:l,title:s,type:"Feature Layer",typeIdField:""},popupInfo:i}},s._writePointBarriers=function(){return this._writeNetworkFeatures(this.pointBarriers,this.defaultSymbols.pointBarriers,"esriGeometryPoint",Y.fields,Y.popupInfo,"Barriers","Point Barriers")},s._writePolygonBarriers=function(){return this._writeNetworkFeatures(this.polygonBarriers,this.defaultSymbols.polygonBarriers,"esriGeometryPolygon",Z.fields,Z.popupInfo,"PolygonBarriers","Polygon Barriers")},s._writePolylineBarriers=function(){return this._writeNetworkFeatures(this.polylineBarriers,this.defaultSymbols.polylineBarriers,"esriGeometryPolyline",$.fields,$.popupInfo,"PolylineBarriers","Line Barriers")},s._writeRouteInfo=function(){return this._writeNetworkFeatures(null!=this.routeInfo?new m([this.routeInfo]):null,this.defaultSymbols.routeInfo,"esriGeometryPolyline",X.fields,X.popupInfo,"RouteInfo","Route Details")},s._writeStops=function(){const e=this._writeNetworkFeatures(this.stops,null,"esriGeometryPoint",re.fields,re.popupInfo,"Stops","Stops");if(null==e)return null;const{stops:t}=this.defaultSymbols,r=null!=t&&null!=t.first&&t.first.toJSON(),o=null!=t&&null!=t.middle&&t.middle.toJSON(),i=null!=t&&null!=t.last&&t.last.toJSON();return e.layerDefinition.drawingInfo.renderer={type:"uniqueValue",field1:"Sequence",defaultSymbol:o,uniqueValueInfos:[{value:"1",symbol:r,label:"First Stop"},{value:`${this.stops.length}`,symbol:i,label:"Last Stop"}]},e},e._createClass(o,[{key:"fullExtent",get:function(){const e=new T({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:oe.WGS84});if(null!=this.routeInfo&&null!=this.routeInfo.geometry)return this.routeInfo.geometry.extent??e;if(null==this.stops)return e;const t=this.stops.filter((e=>null!=e.geometry));if(t.length<2)return e;const{spatialReference:r}=t.at(0).geometry;if(null==r)return e;const o=t.toArray().map((e=>{const t=e.geometry;return[t.x,t.y]}));return new ie({points:o,spatialReference:r}).extent}},{key:"title",get:function(){return null!=this.routeInfo&&null!=this.routeInfo.name?this.routeInfo.name:"Route"},set:function(e){this._overrideIfSome("title",e)}},{key:"url",get:function(){return r.routeServiceUrl},set:function(e){null!=e?this._set("url",j.sanitizeUrl(e,ve)):this._set("url",r.routeServiceUrl)}}]),o}(G.BlendLayer(U.ScaleRangeLayer(J.OperationalLayer(M.PortalLayer(g.MultiOriginJSONMixin(w.HandleOwnerMixin(A)))))));t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"portal-item":{write:{allowNull:!0,ignoreOrigin:!0}},"web-map":{write:{overridePolicy(){return{allowNull:!0,ignoreOrigin:null==this.portalItem}}}}}}})],Be.prototype,"_featureCollection",void 0),t.__decorate([O.writer(["web-map","portal-item"],"_featureCollection")],Be.prototype,"writeFeatureCollectionWebmap",null),t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{target:"type",overridePolicy(){return{ignoreOrigin:null!=this.portalItem}}}}}}})],Be.prototype,"_type",void 0),t.__decorate([I.property({nonNullable:!0,type:q})],Be.prototype,"defaultSymbols",void 0),t.__decorate([I.property({readOnly:!0})],Be.prototype,"directionLines",void 0),t.__decorate([D.reader(["web-map","portal-item"],"directionLines",["layers","featureCollection.layers"])],Be.prototype,"readDirectionLines",null),t.__decorate([I.property({readOnly:!0})],Be.prototype,"directionPoints",void 0),t.__decorate([D.reader(["web-map","portal-item"],"directionPoints",["layers","featureCollection.layers"])],Be.prototype,"readDirectionPoints",null),t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],Be.prototype,"featureCollectionType",void 0),t.__decorate([I.property({readOnly:!0})],Be.prototype,"fullExtent",null),t.__decorate([I.property({json:{origins:{"web-map":{name:"featureCollection.showLegend"}},write:!0}})],Be.prototype,"legendEnabled",void 0),t.__decorate([I.property({type:["show","hide"]})],Be.prototype,"listMode",void 0),t.__decorate([I.property({type:Number,nonNullable:!0,json:{write:!1}})],Be.prototype,"maxScale",void 0),t.__decorate([D.reader(["web-map","portal-item"],"maxScale",["layers","featureCollection.layers"])],Be.prototype,"readMaxScale",null),t.__decorate([I.property({type:Number,nonNullable:!0,json:{write:!1}})],Be.prototype,"minScale",void 0),t.__decorate([D.reader(["web-map","portal-item"],"minScale",["layers","featureCollection.layers"])],Be.prototype,"readMinScale",null),t.__decorate([I.property({type:["ArcGISFeatureLayer"],value:"ArcGISFeatureLayer"})],Be.prototype,"operationalLayerType",void 0),t.__decorate([I.property({nonNullable:!0,type:m.ofType(Y)})],Be.prototype,"pointBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"pointBarriers",["layers","featureCollection.layers"])],Be.prototype,"readPointBarriers",null),t.__decorate([I.property({nonNullable:!0,type:m.ofType(Z)})],Be.prototype,"polygonBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"polygonBarriers",["layers","featureCollection.layers"])],Be.prototype,"readPolygonBarriers",null),t.__decorate([I.property({nonNullable:!0,type:m.ofType($)})],Be.prototype,"polylineBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"polylineBarriers",["layers","featureCollection.layers"])],Be.prototype,"readPolylineBarriers",null),t.__decorate([I.property({readOnly:!0})],Be.prototype,"routeInfo",void 0),t.__decorate([D.reader(["web-map","portal-item"],"routeInfo",["layers","featureCollection.layers"])],Be.prototype,"readRouteInfo",null),t.__decorate([I.property({type:oe})],Be.prototype,"spatialReference",void 0),t.__decorate([D.reader(["web-map","portal-item"],"spatialReference",["layers","featureCollection.layers"])],Be.prototype,"readSpatialReference",null),t.__decorate([I.property({nonNullable:!0,type:m.ofType(re)})],Be.prototype,"stops",void 0),t.__decorate([D.reader(["web-map","portal-item"],"stops",["layers","featureCollection.layers"])],Be.prototype,"readStops",null),t.__decorate([I.property()],Be.prototype,"title",null),t.__decorate([I.property({readOnly:!0,json:{read:!1}})],Be.prototype,"type",void 0),t.__decorate([I.property()],Be.prototype,"url",null),Be=t.__decorate([C.subclass(be)],Be);return Be}));