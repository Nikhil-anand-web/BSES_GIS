/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Basemap","../Viewpoint","../core/asyncUtils","../core/Collection","../core/collectionUtils","../core/JSONSupport","../core/Logger","../core/maybe","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../core/accessorSupport/ensureType","../chunks/vec3","../chunks/vec3f64","../layers/Layer","../layers/mixins/OperationalLayer","../support/basemapUtils","../views/3d/support/mathUtils","../views/3d/support/viewpointUtils","../views/support/Scheduler","../webdoc/support/SlideThumbnail","./SunLighting","./VirtualLighting","./support/Description","./support/SlideEnvironment","./support/SlideGround","./support/SlideVisibleLayer","./support/Title"],(function(e,t,i,n,r,a,o,s,l,p,c,u,h,d,y,m,g,v,b,w,f,_,T,L,C,S,E,k,V,U,A,D,I,O){"use strict";let j=0;const q=a.ofType(I.SlideVisibleLayer);let M=function(t){function i(e){var i;return(i=t.call(this,e)||this).id=Date.now().toString(16)+"-slide-"+j++,i.title=new O,i.description=new U,i.thumbnail=new E.SlideThumbnail,i.viewpoint=null,i.basemap=null,i.ground=null,i.environment=new A.SlideEnvironment,i.visibleLayers=new q,i}e._inherits(i,t);var n=i.prototype;return n.destroy=function(){this.visibleLayers.removeAll(),this.basemap?.destroy(),this.basemap=null,this.thumbnail=p.destroyMaybe(this.thumbnail),this.description=null,this.title=null,this.thumbnail=null},n.castTitle=function(e){return"string"==typeof e?new O({text:e}):v.ensureType(O,e)},n.castDescription=function(e){return"string"==typeof e?new U({text:e}):v.ensureType(U,e)},n.castThumbnail=function(e){return"string"==typeof e?new E.SlideThumbnail({url:e}):v.ensureType(E.SlideThumbnail,e)},n.castBasemap=function(e){return T.ensureType(e)},n.castVisibleLayers=function(e){return e&&"function"==typeof e.map?e.map((e=>{if("string"==typeof e)return{id:e};if(e instanceof f){const t=R(e);return{id:e.id,sublayerIds:t}}return e.id?{id:e.id,sublayerIds:"sublayerIds"in e?e.sublayerIds:void 0}:(l.getLogger(this).warn('Invalid visible layer, expected { id }, Layer or "id"'),e)})):null},n.clone=function(){return new(0,this.constructor)({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})},n._updateVisibleLayersFrom=function(e){const t=[];return c.eachAlways(this._getLayers(e.map).map((i=>e.whenLayerView(i).then((e=>{if(e.visible){const n=R(i);t.push(new I.SlideVisibleLayer({id:e.layer.id,sublayerIds:n}))}})))).toArray()).then((()=>{this.visibleLayers.removeAll(),this.visibleLayers.addMany(t)}))},n.updateFrom=function(e,t){const i={format:"png",quality:80,width:120,height:75,disableDecorations:!0,...t&&t.screenshot};return e.when((()=>(this.viewpoint=e.viewpoint.clone(),this.environment.lighting="virtual"===e.environment.lighting.type?V.prototype.clone.apply(e.environment.lighting):k.prototype.clone.apply(e.environment.lighting),this.environment.weather=e.environment.weather.clone(),this.basemap=e.map.basemap&&e.map.basemap.clone()||null,this.ground=e.map.ground?D.fromGround(e.map.ground):null,this._updateVisibleLayersFrom(e)))).then((()=>e.takeScreenshot(i))).then((e=>(this.thumbnail=new E.SlideThumbnail({url:e.dataUrl}),this)))},n.applyTo=async function(e,t){null!=this._applyToController&&this._applyToController.abort();let i=new AbortController;this._applyToController=i;const n=c.onAbortOrThrow(t,(()=>i?.abort())),a=e.resourceController.scheduler.registerTask(S.TaskPriority.SLIDE);let o=!1;const s={animate:!0,...t,signal:this._applyToController.signal},l=async()=>{await Promise.all([a.schedule((()=>o=this._setViewpointOfInterest(e,s))),a.schedule((()=>this._applyBasemap(e,s)),s.signal)]),await this._loadLayersWithSublayerVisibility(e),await Promise.all([a.schedule((()=>this._applyLayerVisibility(e)),s.signal),a.schedule((()=>this._applyGround(e)),s.signal),a.schedule((()=>this._applyViewpoint(e,s)),s.signal)]),await a.schedule((()=>e.environment.weather=this.environment.weather.clone()))},p=await r.result(e.addUpdatingPromise(l()));if(o&&(e.contentCamera=null),a.remove(),this._applyToController===i&&(this._applyToController=null),i=null,n?.remove(),!1===p.ok)throw p.error;return this},n._applyBasemap=async function(e,t){if(this.basemap){try{await this.basemap.load(t)}catch(i){if(c.isAbortError(i))throw i}e.map.basemap=T.clonePreservingTiledLayers(this.basemap,e.map.basemap)}},n._applyGround=function(e){this.ground&&(e.map.ground=this.ground.cloneAndApplyTo(e.map.ground))},n._getLayers=function(e){const t=new a;return this._collectLayers(e,t),this._collectLayers(e.ground,t),t},n._collectLayers=function(e,t){e.layers.forEach((e=>{_.isOperationalLayer(e)&&(t.add(e),"layers"in e&&this._collectLayers(e,t))}))},n._loadLayersWithSublayerVisibility=async function(e){this.visibleLayers&&await c.eachAlways(this._getLayers(e.map).map((e=>{const t=this.visibleLayers.find((t=>t.id===e.id))?.sublayerIds;return t?e.load():null})))},n._applyLayerVisibility=function(e){if(!this.visibleLayers)return;this._getLayers(e.map).forEach((e=>{const t=this.visibleLayers.find((t=>t.id===e.id));e.visible=null!=t;const i=t?.sublayerIds,n=P(e);i&&n&&n.forEach((e=>e.visible=i.includes(e.id)))}))},n._setViewpointOfInterest=function(e,t){if(e.state.fixedContentCamera||!this.viewpoint||t?.ignoreViewpoint||!t?.useDestinationCamera)return!1;const i=C.toCamera(e,this.viewpoint);return e.contentCamera=i,null!=i},n._applyViewpoint=async function(e,t){if(this._applyCachedCameraTrackingEnabled(e),this.viewpoint&&!t.ignoreViewpoint){if(null!=this.viewpoint.camera&&(this.viewpoint.camera.fov=e.camera.fov),t.animate&&this.get("environment.lighting.date"))return this._animateToLighting(e,t);t.animate&&(e.environment.applyLighting(this.environment.lighting.clone()),await e.goTo(this.viewpoint,t)),e.viewpoint=this.viewpoint}e.environment.applyLighting(this.environment.lighting.clone())},n._animateToLighting=async function(e,t){let i=null;"virtual"!==e.environment.lighting.type&&"virtual"!==this.environment.lighting.type&&("global"===e.viewingMode&&(i=this._animateLightingWithCamera(e,e.environment.lighting,this.environment.lighting)),e.environment.cachedCameraTrackingEnabled=e.environment.lighting.cameraTrackingEnabled,e.environment.lighting.cameraTrackingEnabled=!1),e.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled,"virtual"===this.environment.lighting.type||"virtual"===e.environment.lighting.type?(e.environment.applyLighting(this.environment.lighting.clone()),"virtual"!==e.environment.lighting.type&&(e.environment.cachedCameraTrackingEnabled=e.environment.lighting.cameraTrackingEnabled,e.environment.lighting.cameraTrackingEnabled=!1)):null!=this.environment.lighting.displayUTCOffset&&(e.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);return e.goTo(this.viewpoint,t).then((()=>{this._applyCachedCameraTrackingEnabled(e),e.environment.applyLighting(this.environment.lighting.clone())})).catch((t=>{throw null==e.animation&&this._applyCachedCameraTrackingEnabled(e),t})).finally((()=>{p.removeMaybe(i)}))},n._applyCachedCameraTrackingEnabled=function(e){null!=e.environment.cachedCameraTrackingEnabled&&(e.environment.lighting.cameraTrackingEnabled=e.environment.cachedCameraTrackingEnabled,e.environment.cachedCameraTrackingEnabled=null)},n._getTime=function(e){return[e.getTime(),3600*e.getUTCHours()+60*e.getUTCMinutes()+e.getUTCSeconds()]},n._setTime=function(e,t,i){return e.setTime(t),e.setUTCHours(i/3600),e.setUTCMinutes(i%3600/60),e.setUTCSeconds(i%3600%60),e},n._animateLightingWithCamera=function(e,t,i){const n=new Date(t.date.toString()),[r,a]=this._getTime(n),[o,s]=this._getTime(i.date),l=F(a,s),p=e.renderCoordsHelper,c=w.create();p.toRenderCoords(e.camera.position,c);const h=w.create(),d=w.create();null!=this.viewpoint.camera&&p.toRenderCoords(this.viewpoint.camera.position,h);const y=new Date;return u.when((()=>e.camera),(e=>{p.toRenderCoords(e.position,d);const i=b.squaredDistance(c,d),n=b.squaredDistance(h,d);let s=0;i+n!==0&&(s=i/(i+n));const u=r+(o-r)*s,m=G(a,l*s);t.date=this._setTime(y,u,m)}))},i.createFrom=function(e,t){return(new this).updateFrom(e,t)},e._createClass(i,[{key:"visibleLayers",set:function(e){this._set("visibleLayers",o.referenceSetter(e,this._get("visibleLayers"),q))}}]),i}(s.JSONSupport);function P(e){if("building-scene"===e.type||"map-image"===e.type)return e.allSublayers.toArray()}function R(e){const t=P(e);if(t)return t.filter((e=>e.visible)).map((e=>e.id))}t.__decorate([h.property({type:String,json:{write:{isRequired:!0}}})],M.prototype,"id",void 0),t.__decorate([h.property({type:O,json:{default:()=>new O({text:""}),write:{isRequired:!0}}})],M.prototype,"title",void 0),t.__decorate([d.cast("title")],M.prototype,"castTitle",null),t.__decorate([h.property({type:U,json:{write:{overridePolicy:e=>({enabled:!(!e||!e.text)})}}})],M.prototype,"description",void 0),t.__decorate([d.cast("description")],M.prototype,"castDescription",null),t.__decorate([h.property({type:E.SlideThumbnail,json:{default:()=>new E.SlideThumbnail({url:""}),write:{isRequired:!0}}})],M.prototype,"thumbnail",void 0),t.__decorate([d.cast("thumbnail")],M.prototype,"castThumbnail",null),t.__decorate([h.property({type:n,nonNullable:!0,json:{write:{isRequired:!0}}})],M.prototype,"viewpoint",void 0),t.__decorate([h.property({type:i,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],M.prototype,"basemap",void 0),t.__decorate([d.cast("basemap")],M.prototype,"castBasemap",null),t.__decorate([h.property({type:D,json:{write:!0}})],M.prototype,"ground",void 0),t.__decorate([h.property({type:q,json:{write:{isRequired:!0}}})],M.prototype,"visibleLayers",null),t.__decorate([d.cast("visibleLayers")],M.prototype,"castVisibleLayers",null),t.__decorate([h.property({type:A.SlideEnvironment,json:{write:!0}})],M.prototype,"environment",void 0),M=t.__decorate([g.subclass("esri.webscene.Slide")],M);const x=86400,B=43200;function F(e,t){let i=t-e;return i>B&&(i-=x),i<-B&&(i+=x),i}function G(e,t){return L.moduloPositive(e+t,x)}return M}));