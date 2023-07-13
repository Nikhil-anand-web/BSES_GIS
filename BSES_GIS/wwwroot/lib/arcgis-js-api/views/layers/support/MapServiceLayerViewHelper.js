/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Accessor","../../../core/arrayUtils","../../../core/Collection","../../../core/Error","../../../core/handleUtils","../../../core/has","../../../core/MapUtils","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/unitUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/Extent","../../../geometry/support/scaleUtils","../../../layers/support/fieldUtils","../../../layers/support/floorFilterUtils","../../../renderers/support/clickToleranceUtils","../../../rest/identify","../../../rest/support/IdentifyParameters","../../../support/arcadeOnDemand","../../../symbols/SimpleMarkerSymbol","./popupUtils"],(function(e,t,r,i,s,a,o,n,l,c,u,p,y,h,d,f,g,m,w,b,v,S,_,F,P,x,V,M){"use strict";let U=null;function G(e,t){return"tile"===t.type||"map-image"===t.type}function H(e,t,r){const i=[],s=e=>{const a=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&a&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=M.getFetchPopupTemplate(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return(e?.toArray()??[]).reverse().map(s),i}function R(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?x.loadArcade():Promise.resolve()}async function L(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}async function A(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}t.MapServiceLayerViewHelper=function(t){function i(e){var r;return(r=t.call(this,e)||this)._featuresResolutions=new WeakMap,r.highlightGraphics=null,r.highlightGraphicUpdated=null,r.updateHighlightedFeatures=y.debounce((async e=>{r.destroyed||r.updatingHandles.addPromise(r._updateHighlightedFeaturesGeometries(e).catch((()=>{})))})),r}r._inherits(i,t);var a=i.prototype;return a.initialize=function(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([h.on((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])},a.fetchPopupFeatures=async function(e,t){const{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new l("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const s=H(r.sublayers,i,t);if(!s.length)return[];const a=await L(r,s);if(!((r.capabilities?.operations?.supportsIdentify??!0)&&r.version>=10.5)&&!a)throw new l("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return a?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)},a.clearHighlights=function(){this.highlightGraphics?.removeAll()},a.highlight=function(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let r=null;if(e instanceof s?r=[e]:n.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(o.isSome),!r||!r.length)return c.makeHandle();for(const i of r){const e=i.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(i.visible=!1)}return t.addMany(r),{remove:()=>{t.removeMany(r??[])}}},a._updateHighlightedFeaturesSymbols=async function(t){const{layerView:{view:r},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const a of t){const t=a.sourceLayer&&"renderer"in a.sourceLayer&&a.sourceLayer.renderer;a.sourceLayer&&"geometryType"in a.sourceLayer&&"point"===a.sourceLayer.geometryType&&t&&"getSymbolAsync"in t&&t.getSymbolAsync(a).then((async o=>{o||(o=new V);let n=null;const l="visualVariables"in t?t.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(U||(U=(await new Promise(((t,r)=>e(["../../../renderers/visualVariables/support/visualVariableUtils"],t,r)))).getSize),n=U(l,a,{view:r.type,scale:r.scale,shape:"simple-marker"===o.type?o.style:null})),n||(n="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16),i.includes(a)&&(a.symbol=new V({style:"square",size:n,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(a,"symbol"),a.visible=!0)}))}},a._updateHighlightedFeaturesGeometries=async function(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!i?.length||!t.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(e),o=new Map;for(const c of i)if(!this._featuresResolutions.has(c)||this._featuresResolutions.get(c)>a){const e=c.sourceLayer;p.getOrCreateMapValue(o,e,(()=>new Map)).set(c.getObjectId(),c)}const n=Array.from(o,(([e,t])=>{const i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=a,i.outSpatialReference=r.spatialReference,e.queryFeatures(i)})),l=await Promise.all(n);if(!this.destroyed)for(const{features:c}of l)for(const e of c){const t=e.sourceLayer,r=o.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,s(r,"geometry"),this._featuresResolutions.set(r,a))}},a._getTargetResolution=function(e){const t=e*d.getMetersPerUnitForSR(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r},a._fetchPopupFeaturesUsingIdentify=async function(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:s}=await F.identify(this.layerView.layer.parsedUrl,i);return s.map((e=>e.feature))},a._createIdentifyParameters=async function(e,t,r){const{floors:i,layer:s,timeExtent:a,view:{spatialReference:o,scale:n}}=this.layerView,l=null!=r?r.event:null;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load().catch((()=>{})))));const c=Math.min(u("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?_.calculateTolerance({renderer:t.renderer,event:l}):e),2)),p=this.createFetchPopupFeaturesQueryGeometry(e,c),y=b.getResolutionForScale(n,o),h=Math.round(p.width/y),d=new w({xmin:p.center.x-y*h,ymin:p.center.y-y*h,xmax:p.center.x+y*h,ymax:p.center.y+y*h,spatialReference:p.spatialReference});return new P({floors:i,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:h,layerOption:"popup",mapExtent:d,returnGeometry:!0,spatialReference:o,sublayers:s.sublayers,timeExtent:a,tolerance:c,width:h})},a._fetchPopupFeaturesUsingQueries=async function(e,t,r){const{layerView:{floors:i,timeExtent:s}}=this,a=null!=r?r.event:null,n=t.map((async({sublayer:t,popupTemplate:r})=>{if(await t.load().catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const o=t.createQuery(),n=_.calculateTolerance({renderer:t.renderer,event:a}),l=this.createFetchPopupFeaturesQueryGeometry(e,n),c=new Set,[u]=await Promise.all([M.getRequiredFields(t,r),t.renderer?.collectRequiredFields(c,t.fieldsIndex)]);v.collectFields(c,t.fieldsIndex,u);const p=Array.from(c).sort();if(o.geometry=l,o.outFields=p,o.timeExtent=s,i){const e=i.clone(),r=S.getLayerFloorFilterClause(e,t);null!=r&&(o.where=o.where?`(${o.where}) AND (${r})`:r)}const y=this._getTargetResolution(l.width/n),h=await R(r),d="point"===t.geometryType||h&&h.arcadeUtils.hasGeometryOperations(r);d||(o.maxAllowableOffset=y);let{features:f}=await t.queryFeatures(o);const g=d?0:y;f=await A(t,f);for(const e of f)this._featuresResolutions.set(e,g);return f}));return(await y.eachAlways(n)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter(o.isSome)},r._createClass(i)}(a),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"layerView",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"highlightGraphics",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"highlightGraphicUpdated",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"updatingHandles",void 0),t.MapServiceLayerViewHelper=i.__decorate([m.subclass("esri.views.layers.support.MapService")],t.MapServiceLayerViewHelper),t.collectPopupProviders=H,t.isMapServiceLayerView=G,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
