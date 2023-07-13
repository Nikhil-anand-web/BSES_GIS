/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../assets","../../config","../../Graphic","../../PopupTemplate","../../symbols","../../core/Accessor","../../core/arrayUtils","../../core/Collection","../../core/Error","../../core/Evented","../../core/Logger","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Point","../../geometry/SpatialReference","../../intl/locale","../../intl/messages","../../portal/Portal","../../views/support/layerViewUtils","./LayerSearchSource","./LocatorSearchSource","./SearchSource","./support/geometryUtils","./support/locatorUtils","../support/geolocationUtils","../support/GoTo","../../symbols/TextSymbol","../../symbols/PictureMarkerSymbol","../../symbols/SimpleLineSymbol","../../symbols/SimpleFillSymbol"],(function(e,t,r,o,s,n,a,i,l,u,c,p,h,d,g,y,_,f,m,S,w,v,b,x,I,L,T,R,E,F,P,G,A,C,O,k){"use strict";function M(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const N=()=>b.fetchMessageBundle("esri/widgets/Search/t9n/Search"),D="esri.widgets.Search.SearchViewModel",H=h.getLogger(D),U="highlight",V=u.ofType({key:e=>e.layer?"layer":"locator",base:R,typeMap:{layer:L,locator:T}}),J=w.WGS84,B="esri/images/search/search-symbol-32.png",W=/<(?:.|\s)*?>/g,Q=-1;let Z=function(t){function a(e){var o;return(o=t.call(this,e)||this)._gotoController=null,o._searching=null,o._updatingPromise=null,o._createdFeatureLayers=[],o.autoNavigate=!0,o.autoSelect=!0,o.defaultPopupTemplate=null,o.defaultSources=new V,o.defaultSymbols={point:new C({url:r.getAssetUrl(B),size:24,width:24,height:24}),polyline:new O({color:[130,130,130,1],width:2}),polygon:new k({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},o.includeDefaultSources=!0,o.maxInputLength=128,o.maxResults=6,o.maxSuggestions=6,o.messages=null,o.minSuggestCharacters=3,o.popupEnabled=!0,o.popupTemplate=null,o.portal=x.getDefault(),o.resultCount=null,o.resultGraphicEnabled=!0,o.resultGraphic=null,o.results=null,o.selectedSuggestion=null,o.searchAllEnabled=!0,o.selectedResult=null,o.sources=new V,o.suggestionDelay=350,o.suggestionCount=null,o.suggestions=null,o.suggestionsEnabled=!0,o.view=null,o}e._inherits(a,t);var i=a.prototype;return i.initialize=function(){const e=async()=>{const e=await N();this.messages=e,this.defaultPopupTemplate=new n({title:e.searchResult,content:"{Match_addr}"})};e(),this.addHandles([g.watch((()=>[this.includeDefaultSources,this.view,this.portal]),(()=>this._update()),g.initial),v.onLocaleChange(e)])},i.destroy=function(){this.removeAllHandles(),this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics()},i.clear=function(){this.searchTerm=""},i.clearGraphics=function(){this._removeHighlight(),this._closePopup();const{view:e,resultGraphic:t}=this;e&&t&&e.graphics.remove(t),this._set("resultGraphic",null)},i.search=function(e,t){this.emit("search-start"),this.clearGraphics();const r=this._createSuggestionForSearch(e),o=(async()=>{try{await this.when();const e=await this._getResultsFromSources(r,t);if(t?.signal?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:r.text??"",numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(o,e,r);const s=this._getFirstResult(o.results),n=r.location&&s?s.name:r.text,a=n?.replace(W,"");return this._set("searchTerm",a),(r.key&&"number"==typeof r.sourceIndex||r.location)&&this._set("selectedSuggestion",r),this._set("results",o.results),this._set("resultCount",o.results.reduce(((e,t)=>e+(t.results?.length??0)),0)),this.emit("search-complete",o),await this._selectFirstResult(s),o}finally{this._clearSearching()}})();return this._searching=o,o},i.searchNearby=async function(e){if(!this.locationEnabled){const e=new c("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});throw H.error(e),e}const t=(async()=>{try{const t=await P.getCurrentPosition(),r=await P.positionToPoint({position:t,view:this.view},e);return await this.search(r,e)}finally{this._clearSearching()}})();return this._searching=t,t},i.select=async function(e){if(this.clearGraphics(),!e){const t=new c("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});throw H.error(t),t}const{view:t}=this,r=M(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),o=null!=r?this.allSources.at(r):null;if(!o){const e=new c("select:missing-source","Cannot select without a source.",{source:o});throw H.error(e),e}const n=o instanceof L?this._getLayerSourcePopupTemplate(o):o.popupTemplate,a=o.resultSymbol||this._getDefaultSymbol(e),i=M(o,"resultGraphicEnabled")?o.resultGraphicEnabled:this.resultGraphicEnabled,l=M(o,"autoNavigate")?o.autoNavigate:this.autoNavigate,u=(M(o,"popupEnabled")?o.popupEnabled:this.popupEnabled)?n||this.popupTemplate||this.defaultPopupTemplate:null,{feature:p}=e;if(!p){const e=new c("select:missing-feature","Cannot select without a feature.",{feature:p});throw H.error(e),e}const{attributes:h,geometry:g,layer:y,sourceLayer:_}=p,f=E.getPointFromGeometry(g),m={layerViewQuery:this._getLayerView(p),elevationQuery:t&&null!=f?E.getPointWithElevation(f,t).catch((()=>f)):Promise.resolve(f)},S=await d.eachAlways(m),w=S.layerViewQuery.value,v=S.elevationQuery.value;a instanceof A&&(a.text=e.name);const b=t&&l?e.target||e.extent:null,x=null!=b?this._goToSearchResult(b):Promise.resolve();await x;const T=w?p:new s({geometry:g,symbol:a,attributes:h,layer:y,sourceLayer:_,popupTemplate:u}),R=t?.popup,F=R&&T.getEffectivePopupTemplate(R.defaultPopupTemplateEnabled);return F&&await t.openPopup({features:[T],location:v}),w&&I.highlightsSupported(w)&&!F&&this._highlightFeature({graphic:T,layerView:w}),!w&&i&&t&&t.graphics.push(T),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",T),this.emit("select-result",{result:e,source:o,sourceIndex:r}),e},i.suggest=async function(e,t,r){const o=e||this.searchTerm;this.emit("suggest-start",{searchTerm:o}),await this._suggestTimer(t,r);const s=await this._suggestImmediate(o,r);return this._set("suggestions",s?.results),this._set("suggestionCount",s?.results.reduce(((e,t)=>e+(t.results?.length??0)),0)??null),this.emit("suggest-complete",s),s},i.when=async function(){await g.whenOnce((()=>!this.updating))},i._update=async function(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const r=this._updatingPromise=d.eachAlways([e?.load(),t?.when()]);if(this.destroyed)return;if(await r,r!==this._updatingPromise)return}await g.whenOnce((()=>this.messages)),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null},i._clearSearching=function(){this._searching=null},i._convertHelperServices=function(){const e=this.portal?.helperServices?.geocode;if(!e)return[];return e.map((e=>{if(!1===e.placefinding)return;const t=o.apiKey&&F.isArcGISWorldGeocoder(e.url)?{url:F.meteredArcGISLocatorUrl}:null,r=T.fromJSON({...e,...t}),s=r.url;if(F.isArcGISWorldGeocoder(s)||F.isProxiedArcGISWorldGeocoder(s)||F.isMeteredArcGISWorldGeocoder(s)){const e=r.outFields??["Addr_type","Match_addr","StAddr","City"],t=(r.placeholder||this.messages?.placeholder)??"",o="number"==typeof r.defaultZoomScale?r.defaultZoomScale:2500;r.singleLineFieldName="SingleLine",r.outFields=e,r.placeholder=t,r.defaultZoomScale=o}return r.singleLineFieldName?r:void 0})).filter(l.isSome)},i._destroyFeatureLayers=function(){this._createdFeatureLayers.forEach((e=>e?.destroy())),this._createdFeatureLayers=[]},i._getLayerSources=function(e,t){const r=this.view?.map;return e.map((e=>{const o=r.findLayerById(e.id);if(!o)return;const s=this._getLayerJSON(e),n=L.fromJSON(s);return n.placeholder=t,this._getLayer(o,s).then((e=>{n.layer=e})),n})).filter(l.isSome).toArray()},i._getTableSources=function(e,t){const r=this.view?.map;return e.map((e=>{if(!e.id)return;const o=r.findTableById(e.id);if(!o)return;const s=this._getLayerJSON(e),n=L.fromJSON(s);return n.placeholder=t,this._getLayer(o,s).then((e=>{n.layer=e})),n})).filter(l.isSome).toArray()},i._convertApplicationProperties=function(){const e=this.view?.map,t=e?.applicationProperties?.viewing?.search;if(!t)return[];const{enabled:r,hintText:o,layers:s,tables:n}=t;if(!r)return[];return[...this._getLayerSources(s,o),...this._getTableSources(n,o)]},i._getSubLayer=async function(e,t){if(await e.load(),!e.allSublayers)throw new Error;const r=e.allSublayers.find((e=>e.id===t.subLayer));if(!r)throw new Error;const o=await(r.createFeatureLayer?.());if(!o)throw new Error;return this._createdFeatureLayers.push(o),o},i._getBuildingSubLayer=async function(e,t){await e.load();const r=e.allSublayers.find((e=>e.id===t.subLayer));if("building-component"!==r?.type)throw new Error;if(await r.load(),null==r.associatedLayer)throw new Error;return await r.associatedLayer.load(),r},i._getLayer=async function(e,t){if("feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type)return e;if("map-image"===e.type)try{return await this._getSubLayer(e,t)}catch(r){const t=new c("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return H.error(t),null}return"building-scene"===e.type?this._getBuildingSubLayer(e,t):null},i._getLayerJSON=function(e){return"function"==typeof e.toJSON?e.toJSON():e},i._updateDefaultSources=function(){const{defaultSources:e,includeDefaultSources:t}=this;this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])},i._abortGoTo=function(){this._gotoController&&this._gotoController.abort(),this._gotoController=null},i._clear=function(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")},i._closePopup=function(){const e=this.view?.popup,{resultGraphic:t}=this;if(!e||!t)return;const r="selectedFeature"in e,o=r?e.selectedFeature:null;r&&(o&&o===t)&&e.close()},i._suggestTimer=function(e,t){const r=null!=e?e:this.suggestionDelay;return d.after(r,null,t&&t.signal)},i._createLocationForSearch=function(e){return e instanceof s?E.getPointFromGeometry(e.geometry):e instanceof S?e:Array.isArray(e)&&2===e.length?new S({longitude:e[0],latitude:e[1]}):null},i._createSuggestionForSearch=function(e){if(e&&M(e,"key")&&M(e,"text")&&M(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),r="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:s}=this,n=!e&&o&&s,a=n&&o.key===s.key&&o.sourceIndex===s.sourceIndex,i=n&&o.location;return a||i?o:{location:t,text:t?"":r,sourceIndex:null,key:null}},i._getFirstResult=function(e){let t=null;return e&&e.some((e=>{const{results:r}=e,o=r?.[0],s=!!o;return s&&(t=o),s})),t},i._selectFirstResult=async function(e){return this.autoSelect&&e?this.select(e):null},i._suggestImmediate=async function(e,t){await this.when();const r=await this._getSuggestionsFromSources(e,t);if(t?.signal?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:e??"",numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(o,r),o},i._formatSourceResponse=function(e,t,r){const o=t?.value||[],s=t?.error,n=this.allSources.at(r);if(s){const t={sourceIndex:r,source:n,error:s};e.errors.push(t),H.error(s),e.numErrors++}else{const t={sourceIndex:r,source:n,results:o};e.results.push(t),e.numResults+=o.length}},i._formatResponse=function(e,t,r){if(t)if(e.activeSourceIndex===Q){const o=r&&M(r,"sourceIndex")&&-1!==r.sourceIndex?r.sourceIndex:void 0;t.forEach(((t,r)=>{const s=void 0!==o?o:r;this._formatSourceResponse(e,t,s)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)},i._getResultsFromSources=async function(e,t){const{allSources:r}=this,o=!e.location&&M(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,s=[];if(!r.length){const e=new c("search:no-sources-defined","At least one source is required.",{allSources:r});throw H.error(e),e}return o===Q?r.forEach(((r,o)=>{s.push(this._getResultsFromSource(e,o,t))})):s.push(this._getResultsFromSource(e,o,t)),d.eachAlways(s)},i._getSuggestionsFromSources=async function(e,t){const{allSources:r,activeSourceIndex:o}=this,s=[];if(!r.length){const e=new c("suggest:no-sources-defined","At least one source is required.",{allSources:r});throw H.error(e),e}return o===Q?r.forEach(((r,o)=>{s.push(this._getSuggestionsFromSource(e,o,t))})):s.push(this._getSuggestionsFromSource(e,o,t)),d.eachAlways(s)},i._getResultsFromSource=async function(e,t,r){const o=null!=t?this.allSources.at(t):null;if(!o)return null;const{location:s=null}=e,n=this.view?.spatialReference||J,a=M(o,"maxResults")?o.maxResults:this.maxResults,i=!!(o instanceof L&&M(o,"exactMatch"))&&o.exactMatch,{view:l}=this;return o.getResults?.({view:l,sourceIndex:t,location:s,suggestResult:e,spatialReference:n,exactMatch:i,maxResults:a},r)},i._getSuggestionsFromSource=async function(e,t,r){const o=this.allSources.at(t);if(!o)return null;e??(e="");const s=M(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,n=e?.length,a=M(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(s&&e.trim()&&n>=a){const s=this.view?.spatialReference||J,n=M(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:a}=this,i=!!(o instanceof L&&M(o,"exactMatch"))&&o.exactMatch;return o.getSuggestions?.({view:a,sourceIndex:t,suggestTerm:e,spatialReference:s,maxSuggestions:n,exactMatch:i},r)}return null},i._getLayerSourcePopupTemplate=function(e){const{layer:t}=e;if(t)return M(e,"popupTemplate")?e.popupTemplate:t.popupTemplate},i._getSourceIndexOfResult=function(e){const t=this.results;if(!t)return null;let r=null;return t.some((t=>t.results.some((o=>o===e&&(r=t.sourceIndex,!0))))),r},i._goToSearchResult=async function(e){this._abortGoTo();const t=new AbortController;this._gotoController=t;const r={target:{target:e},options:{signal:t.signal}};e||(r.options.animate=!1),await this.callGoTo(r),this._gotoController=null},i._getDefaultSymbol=function(e){const{defaultSymbols:t}=this,r=e.feature?.geometry;if(null==r)return null;switch(r.type){case"point":case"multipoint":return t.point;case"polyline":return t.polyline;case"extent":case"polygon":return t.polygon;default:return null}},i._removeHighlight=function(){this.removeHandles(U)},i._getLayerView=async function(e){const{view:t}=this;if(!e||!t||"building-component"===e.layer?.type||"subtype-sublayer"===e.layer?.type)return null;const{layer:r}=e;return r?(await t.when(),t.whenLayerView(r)):null},i._highlightFeature=function(e){const{graphic:t,layerView:r}=e,{attributes:o,layer:s}=t,{objectIdField:n}=s,a=(n&&o?.[n])??null,i=r.highlight(a??t);this.addHandles(i,U)},i._setResultFloor=function(e){const{view:t}=this,r=e.feature?.attributes,o=e.feature?.sourceLayer;if(o&&"floorInfo"in o&&o?.floorInfo?.floorField&&r){const e=r[o.floorInfo.floorField];t?.emit("select-result-floor",e)}},e._createClass(a,[{key:"activeSource",get:function(){return this.allSources.at(this.activeSourceIndex)??null}},{key:"activeSourceIndex",get:function(){return 1===this.allSources.length||!this.searchAllEnabled?0:Q},set:function(e){this._overrideIfSome("activeSourceIndex",e)}},{key:"allPlaceholder",get:function(){return this.messages?.allPlaceholder},set:function(e){this._overrideIfSome("allPlaceholder",e)}},{key:"allSources",get:function(){const{sources:e,defaultSources:t,includeDefaultSources:r}=this,o="function"==typeof r?r.call(null,{sources:e,defaultSources:t}):r?t.concat(e):e,s=this._get("allSources")||new V;return s.removeAll(),s.addMany(o.filter(Boolean)),s}},{key:"locationEnabled",get:function(){return this._get("locationEnabled")||P.supported()},set:function(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=P.supported();if(e&&!t){const e=new c("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});H.error(e)}this._override("locationEnabled",!!e&&t)}},{key:"placeholder",get:function(){const{allSources:e,activeSourceIndex:t,allPlaceholder:r}=this;if(t===Q)return r??"";const o=e.at(t);return o?.placeholder??""}},{key:"searchTerm",get:function(){return this._get("searchTerm")||""},set:function(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}},{key:"state",get:function(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}},{key:"updating",get:function(){return null!=this._updatingPromise}}]),a}(G.GoToMixin(p.EventedMixin(i)));Z.ALL_INDEX=Q,t.__decorate([y.property()],Z.prototype,"_searching",void 0),t.__decorate([y.property()],Z.prototype,"_updatingPromise",void 0),t.__decorate([y.property({readOnly:!0,value:null})],Z.prototype,"activeSource",null),t.__decorate([y.property()],Z.prototype,"activeSourceIndex",null),t.__decorate([y.property()],Z.prototype,"allPlaceholder",null),t.__decorate([y.property({readOnly:!0})],Z.prototype,"allSources",null),t.__decorate([y.property()],Z.prototype,"autoNavigate",void 0),t.__decorate([y.property()],Z.prototype,"autoSelect",void 0),t.__decorate([y.property()],Z.prototype,"defaultPopupTemplate",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"defaultSources",void 0),t.__decorate([y.property()],Z.prototype,"defaultSymbols",void 0),t.__decorate([y.property()],Z.prototype,"includeDefaultSources",void 0),t.__decorate([y.property()],Z.prototype,"locationEnabled",null),t.__decorate([y.property()],Z.prototype,"maxInputLength",void 0),t.__decorate([y.property()],Z.prototype,"maxResults",void 0),t.__decorate([y.property()],Z.prototype,"maxSuggestions",void 0),t.__decorate([y.property()],Z.prototype,"messages",void 0),t.__decorate([y.property()],Z.prototype,"minSuggestCharacters",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"placeholder",null),t.__decorate([y.property()],Z.prototype,"popupEnabled",void 0),t.__decorate([y.property({type:n})],Z.prototype,"popupTemplate",void 0),t.__decorate([y.property({type:x})],Z.prototype,"portal",void 0),t.__decorate([y.property()],Z.prototype,"resultCount",void 0),t.__decorate([y.property()],Z.prototype,"resultGraphicEnabled",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"resultGraphic",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"results",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"selectedSuggestion",void 0),t.__decorate([y.property()],Z.prototype,"searchAllEnabled",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"selectedResult",void 0),t.__decorate([y.property()],Z.prototype,"searchTerm",null),t.__decorate([y.property({type:V})],Z.prototype,"sources",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"state",null),t.__decorate([y.property()],Z.prototype,"suggestionDelay",void 0),t.__decorate([y.property()],Z.prototype,"suggestionCount",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"suggestions",void 0),t.__decorate([y.property()],Z.prototype,"suggestionsEnabled",void 0),t.__decorate([y.property({readOnly:!0})],Z.prototype,"updating",null),t.__decorate([y.property()],Z.prototype,"view",void 0),t.__decorate([y.property()],Z.prototype,"clear",null),Z=t.__decorate([m.subclass(D)],Z);return Z}));
