/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../core/Collection","../../core/Evented","../../core/Logger","../../core/maybe","../../core/reactiveUtils","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","../../layers/GraphicsLayer","../../layers/ImageryTileLayer","../../layers/orientedImagery/queries","../../layers/orientedImagery/core/bestImageUtils","../../layers/orientedImagery/core/coverageUtils","../../layers/orientedImagery/transformations/groundToImageUtils","../../layers/orientedImagery/transformations/imageToGroundUtils","../../views/MapView","../../views/2d/viewpointUtils","../../views/support/projectionUtils","./symbols","../../geometry/Polygon","../../geometry/SpatialReference","../../geometry/Point"],(function(e,t,r,i,o,a,n,s,l,c,g,u,h,d,y,p,m,_,v,f,C,P,w,I,b,S,F,V,x,M){"use strict";const O={click:"view-click",view:"view",viewLayers:"view-layers",mapLayers:"map-layers",layerViews:"layer-views",layerListMode:"layer-list-mode",children:"children",registerLayerSelection:"register-layer-selection",plotPointOnGround:"plot-point-on-ground"};function G(e){return"3d"===e?.type}function R(e){return"esri.Graphic"===e?.declaredClass}let L=function(t){function r(r){var i;return(i=t.call(this,r)||this).activeLayer=null,i.shouldShowSelectedImage=!1,i.coverageFrustums=null,i.coveragePolygons=null,i.displayMessage=null,i.pointSources=null,i.selectedFeature=null,i.selectedPoint=null,i.features=null,i._additionalCoveragePolygons=null,i._additionalFeatureGraphics=null,i._currentCoveragePolygon=null,i._currentImage=null,i._fetchFeaturesController=null,i._imageViewer=null,i._initialCurrentCoveragePolygon=null,i._initialCurrentCoverageUpdate=!0,i._overlays=null,i._referencePointOnGround=null,i._referencePointOnImage=null,i._crossSymbol=null,i._panConstraint=null,i._scaleConstraint=null,i._transformController=new AbortController,i._updateCoverageController=null,i.loadViewer=i.loadViewer.bind(e._assertThisInitialized(i)),i.searchBestImage=i.searchBestImage.bind(e._assertThisInitialized(i)),i}e._inherits(r,t);var a=r.prototype;return a.initialize=function(){l.once((()=>this.view?.ready)).then((()=>{this._overlays=new m({listMode:"hide"}),this.view.map.layers.add(this._overlays)})),this.addHandles(l.on((()=>this.view),"click",(e=>{this.view.ready&&this.active&&(e.stopPropagation(),e.preventDefault(),"mouse"===e.pointerType&&0!==e.button||(e.native.altKey?(this.plotReferencePoint(e),this.plotImagePointOnGround({feature:this.selectedFeature,selectedLocation:e.mapPoint,options:{signal:this._transformController?.signal}})):(this.displayMessage=null,this.selectedPoint=e.mapPoint,this.features=null,this.selectedFeature=null,this._overlays?.removeAll(),this._overlays?.add(new i({geometry:e.mapPoint.clone(),symbol:F.crossSymbol})),this._fetchFeaturesWithController(e))))})),O.view)},a.destroy=function(){this._cancelCurrentCoverageUpdate(),this._cancelFetchingFeatures(),this.coverageFrustums=null,this.coveragePolygons=null,this.pointSources=null,this._additionalCoveragePolygons=null,this._additionalFeatureGraphics=null,this._currentImage=s.destroyMaybe(this._currentImage),this._imageViewer=s.destroyMaybe(this._imageViewer),this._initialCurrentCoveragePolygon=s.destroyMaybe(this._initialCurrentCoveragePolygon),this._currentCoveragePolygon=s.destroyMaybe(this._currentCoveragePolygon),this._crossSymbol=s.destroyMaybe(this._crossSymbol),this._referencePointOnGround=s.destroyMaybe(this._referencePointOnGround),this._referencePointOnImage=s.destroyMaybe(this._referencePointOnImage),this._overlays=s.destroyMaybe(this._overlays)},a.getCurrentCoveragePolygon=function(){return this._currentCoveragePolygon},a.getSelectedFeature=function(){return this.selectedFeature},a.getSelectedFeaturePolygon=function(){return this._initialCurrentCoveragePolygon},a.loadViewer=function(e){const t=new Map,r={wkid:0};this._imageViewer=new I({container:e,map:t,spatialReferance:r,constraints:{snapToZoom:!1,rotationEnabled:!1},ui:{components:["zoom"]}}),l.once((()=>this._imageViewer?.stationary)).then((()=>{this.setMessage("onLoadMessage","info")})),this._imageViewer.addHandles([this._imageViewer.on("click",(async e=>{if(0===e.button&&this._currentImage&&this._currentImage&&this._currentImage.fullExtent){const{xmin:t,xmax:r,ymin:i,ymax:o}=this._currentImage.fullExtent,{x:a,y:n}=e.mapPoint;if(t>a||r<a||o<n||i>n)return;this.plotReferencePointOnImage(e.mapPoint);const s=this.getSelectedFeature();if(s){const t=(await w.transformPoints([e.mapPoint.toJSON()],{feature:s,currentCoveragePolygon:this.getSelectedFeaturePolygon(),imageProperties:this._currentImage.rasterInfo,options:{signal:this._transformController?.signal}}))[0];t&&this.plotReferencePointOnGround(t)}}})),l.watch((()=>[this._imageViewer?.viewpoint,this._initialCurrentCoveragePolygon]),(()=>{this._imageViewer?.viewpoint&&this._initialCurrentCoveragePolygon&&(this._cancelCurrentCoverageUpdate(),this.updateCoverage())})),l.watch((()=>this.selectedFeature),(async()=>{const{_fetchFeaturesController:e,selectedFeature:t,selectedPoint:r}=this;!t&&this._currentImage&&(this._imageViewer?.map.layers.remove(this._currentImage),this._currentImage=s.destroyMaybe(this._currentImage)),t&&r&&(await this.loadImage(t,{signal:e?.signal}),this.transformAndPlotSelectedLocation({signal:this._fetchFeaturesController?.signal}))}))])},a.searchBestImage=async function(e,t){try{const r=await v.searchImages(e,t);r&&await this._processFeatureResponse(r,{signal:t?.signal})}catch(r){const e=n.getLogger(this);this.setMessage("imageLoadError","error"),e.error("error occured while finding best image",r)}},a.toggleAdditionalCameraLocations=function(){this._additionalFeatureGraphics?.forEach((e=>{e.visible=!e.visible}))},a.toggleAdditionalCoverage=function(){this._additionalCoveragePolygons?.forEach((e=>{e.visible=!e.visible}))},a.toggleCurrentCoverage=function(){this._currentCoveragePolygon&&(this._currentCoveragePolygon.visible=!this._currentCoveragePolygon.visible,this._selectedFeatureGraphic.visible=!this._selectedFeatureGraphic)},a._cancelFetchingFeatures=function(){const e=this._fetchFeaturesController;e&&e.abort(),this._fetchFeaturesController=null},a._cancelCurrentCoverageUpdate=function(){const e=this._updateCoverageController;e&&e.abort("Multiple Coverage Updates: Aborting Current Coverage Update to sync image and coverage"),this._updateCoverageController=null},a._fetchFeatures=async function(e,t){const{screenPoint:r}=e,i=this.activeLayer;if(i){const e={include:i},o=await this.view.hitTest(r,e);this._processHitTestResults(i,o,t)}},a._fetchFeaturesWithController=async function(e){this._cancelFetchingFeatures();const t=new AbortController,{signal:r}=t;this._fetchFeaturesController=t;try{this._fetchFeatures(e,{signal:r})}catch(i){const e=n.getLogger(this);this.setMessage("imageLoadError","error"),e.error("error occured while fetching features",i)}this._fetchFeaturesController=null},a._processFeatureResponse=async function(e,t){const{selectedPoint:r}=this;if(!r)return;if(!e)return;const a=await e;if(this._fetchFeaturesController=null,!a)return;const{features:n}=a;if(!n.length)return this.setMessage("noImageError","error"),void(this.selectedFeature=null);const s=new Array;this.coveragePolygons=new o,this.coverageFrustums=new o,this.pointSources=new o,n.forEach((e=>{let t;const{polygon:i,frustum:o}=C.createCoveragePolygon(e);if(t=i,e.attributes.isInspection&&(t=C.computePolygonForInspection(e.attributes)),e.layer.coveragePercent&&(t=C.resizePolygon(t,e.layer.coveragePercent)),C.checkIfPolygonContainsSelectedPoint(t,r)){s.push(e);const r=t.toJSON(),i=o?.toJSON(),{attributes:a}=e,{cameraHeight:n,cameraHeading:l,location:c,objectId:g}=a,u="toJSON"in c?c.toJSON():c;r.imageID=u.imageID=g,i&&(i.imageID=g),u.z=n,this.pointSources?.push(u),this.coveragePolygons?.push(l>0?r:void 0),this.coverageFrustums?.push(l>0?i:void 0)}}));const l=this.coveragePolygons?.getItemAt(0);if(!s.length)return void this.setMessage("noImageError","error");if(s[0].attributes.elevationSource&&!r.z&&l){const e=await P.updateElevation([r],{feature:s[0],currentCoveragePolygon:new V(l),options:t});if(e[0]){const t=e[0];r.elevation=t.z}}const c=f.calculateSuitabilities({features:s,selectedPoint:r,camera:G(this.view)?this.view.camera:null,currentImage:this.selectedFeature});c?.sort(((e,t)=>e.suitability-t.suitability));const g=c?.map((e=>e.feature)),u=g[0];this._updateFeatures(g),this._additionalCoveragePolygons=new o,this._additionalFeatureGraphics=new o,this._currentCoveragePolygon&&(this._currentCoveragePolygon.destroy(),this._currentCoveragePolygon=null,this._initialCurrentCoveragePolygon=null);for(const o of this.coveragePolygons)o?.imageID===u?.attributes.objectId?this._initialCurrentCoveragePolygon=new i({attributes:{imageID:o?.imageID},geometry:{type:"polygon",...o},symbol:F.activePolygonSymbol,visible:!1}):this._additionalCoveragePolygons.push(new i({attributes:{imageID:o?.imageID},geometry:{type:"polygon",...o},symbol:F.polygonSymbol,visible:!1}));for(const o of this.pointSources)o.imageID===u?.attributes.objectId?this._selectedFeatureGraphic=new i({attributes:{imageID:o.imageID},geometry:{type:"point",...o},symbol:F.activeSourcePointSymbol,visible:!1}):this._additionalFeatureGraphics?.push(new i({attributes:{imageID:o.imageID},geometry:{type:"point",...o},symbol:F.sourcePointSymbol,visible:!1}));this.selectedFeature=u,this._initialCurrentCoverageUpdate=!0},a._processHitTestResults=async function(e,t,r){const{screenPoint:i,results:o}=t,a=this.view.toMap(i),n=o[0],s={layerInstanceOrURL:e,point:a,queryParams:{maximumDistance:e.maximumDistance,objectIds:this.shouldShowSelectedImage?[n.graphic.attributes.id]:void 0,outSpatialReference:a.spatialReference},queryFeatures:null};await this.searchBestImage(s,r)},a._updateFeatures=async function(e){e.length&&(this.features=new o(e),this.notifyChange("features"))},a.plotReferencePoint=function(e){"mapPoint"in e?this.plotReferencePointOnGround(e.mapPoint):this.plotReferencePointOnGround(e)},a.updateCurrentCoveragePolygon=function(e){if(this._initialCurrentCoverageUpdate)if(this._initialCurrentCoverageUpdate=!1,e&&(this._currentCoveragePolygon&&(this._overlays?.remove(this._currentCoveragePolygon),this._currentCoveragePolygon.destroy()),e.visible=this.isCurrentCoverageVisible,this._currentCoveragePolygon=e),this.view)this._overlays?.graphics.addMany([...this._additionalCoveragePolygons??[],...this._additionalFeatureGraphics??[],this._currentCoveragePolygon,this._selectedFeatureGraphic].filter(R));else{const e={points:this.pointSources?.filter((e=>e?.imageID!==this.selectedFeature?.attributes.objectId)),frustums:this.coverageFrustums?.filter((e=>e?.imageID!==this.selectedFeature?.attributes.objectId)),polygons:this._additionalCoveragePolygons?.map((e=>e.geometry?.toJSON())),currentPoint:this.selectedFeature?.geometry,currentPolygon:this._currentCoveragePolygon,currentFrustum:this.coverageFrustums?.find((e=>e?.imageID===this.selectedFeature?.attributes.objectId))};this.emit("plot-polygons",{data:e})}else if(this.view){const t=this._currentCoveragePolygon&&this._overlays?this._overlays.graphics.indexOf(this._currentCoveragePolygon):-1;e&&(this._currentCoveragePolygon&&(this._overlays?.remove(this._currentCoveragePolygon),this._currentCoveragePolygon.destroy()),e.visible=this.isCurrentCoverageVisible,this._currentCoveragePolygon=e,this._overlays?.graphics.add(this._currentCoveragePolygon,t>=0?t:void 0))}else e&&this.emit("update-current-coverage",{graphic:e.toJSON()})},a.loadImage=async function(e,t){if(!this._imageViewer)return;if(this._imageViewer.graphics.removeAll(),this._currentImage&&this._imageViewer?.map.layers.includes(this._currentImage)&&(this._currentImage?.removeHandles("image-handles"),this._imageViewer?.map.layers.remove(this._currentImage),this._currentImage?.destroy(),this._currentImage=null),!e)return void this.setMessage("noImageError","error");const r=e.attributes.image;this._referencePointOnGround&&(this._imageViewer?.graphics.remove(this._referencePointOnGround),this._referencePointOnGround.destroy());const i={skipExtensions:["aux.xml","jgw"]};this._currentImage=new _({ioConfig:i,url:r,options:t}),this._imageViewer.map.layers.add(this._currentImage);try{const t=await this._currentImage.when();this._imageViewer.extent=t.fullExtent,t.raster.rasterInfo.isPseudoSpatialReference&&(this._imageViewer.constraints.rotationEnabled=!0,this._imageViewer.rotation=(e.attributes.cameraRoll??0)+(e.attributes.imageRotation??0),this._imageViewer.constraints.rotationEnabled=!1),this._panConstraint&&this._imageViewer?.constraints.customConstraints.remove(this._panConstraint),this._panConstraint={constrain:(e,t)=>{if(!this._currentImage||!this._imageViewer||!e.targetGeometry)return e;const{xmin:r,xmax:i,ymin:o,ymax:a}=this._currentImage.fullExtent,{width:n,height:s}=this._imageViewer.extent,l=this._imageViewer?.rotation*Math.PI/180,c=Math.abs(Math.cos(l)*n+Math.sin(l)*s),g=Math.abs(Math.cos(l)*s+Math.sin(l)*n),{width:u,height:h}=this._currentImage.rasterInfo;return e.targetGeometry.x=Math.min(Math.max(r+(u>c?c:u)/2,e.targetGeometry.x),i-(u>c?c:u)/2),e.targetGeometry.y=Math.min(Math.max(o+(h>g?g:h)/2,e.targetGeometry.y),a-(h>g?g:h)/2),e}},this._scaleConstraint&&this._imageViewer?.constraints.customConstraints.remove(this._scaleConstraint),this._scaleConstraint={constrain:(e,t)=>{if(this._imageViewer&&this._currentImage){const{width:t,height:r}=this._currentImage.rasterInfo,{width:i,height:o}=this._imageViewer;e.scale=Math.min(e.scale,b.getResolutionToScaleFactor(this._imageViewer.spatialReference)*Math.max(t/i,r/o))}return e}},this._imageViewer?.constraints.customConstraints.add(this._panConstraint),this._imageViewer?.constraints.customConstraints.add(this._scaleConstraint),t.addHandles([l.when((()=>this._imageViewer?.stationary),(e=>{e&&this._imageViewer?.viewpoint&&this._panConstraint?.constrain(this._imageViewer?.viewpoint)}),l.syncAndInitial)])}catch(o){n.getLogger(this.declaredClass).error("oriented-imagery-viewer:load-image",o)}},a.transformAndPlotSelectedLocation=async function(e){const{_currentImage:t,selectedFeature:r,selectedPoint:o}=this;if(!o||!r||!t)return;const{pixelSize:a}=t.rasterInfo,n=await P.transformPoints([o],{feature:r,imageProperties:t.rasterInfo,currentCoveragePolygon:this.getSelectedFeaturePolygon(),options:e});if(!n.length)return;const s=n[0];if(!s)return;const l=u.ensureType(p,await S.projectWithEngineOrService(t.fullExtent,u.ensureType(x,this._imageViewer?.spatialReference),null,e?.signal));s.x=s.x*a.x+l.xmin,s.y=l.ymax-s.y*a.y,s.spatialReference=l.spatialReference,this._crossSymbol&&(this._imageViewer?.graphics.remove(this._crossSymbol),this._crossSymbol.destroy()),this._crossSymbol=new i({geometry:M.fromJSON(s),symbol:F.crossSymbol}),this._imageViewer?.graphics.add(this._crossSymbol)},a.plotImagePointOnGround=async function(e){if(!this._imageViewer)return;const t=this._currentImage;if(!t)return;const{feature:r,selectedLocation:i,options:o}=e,{pixelSize:a,isPseudoSpatialReference:n,transform:s}=t.rasterInfo,l=await P.transformPoints([i],{feature:r,imageProperties:t.rasterInfo,currentCoveragePolygon:this.getSelectedFeaturePolygon(),options:o});if(!l.length)return;let c=l[0];const g=await S.projectWithEngineOrService(t.fullExtent,this._imageViewer.spatialReference,null,o?.signal);n?(c.x=c.x*a.x+g.xmin,c.y=g.ymax-c.y*a.y,c.spatialReference=g.spatialReference):c=s.forwardTransform(new M(c)),this.plotReferencePointOnImage(c)},a.plotReferencePointOnGround=function(e){this._referencePointOnGround&&(this._overlays?.remove(this._referencePointOnGround),this._referencePointOnGround.destroy()),this._referencePointOnGround=new i({geometry:{type:"point",...e.toJSON()},symbol:F.diamondSymbol}),this._overlays?.add(this._referencePointOnGround)},a.plotReferencePointOnImage=function(e){this._imageViewer&&(this._referencePointOnImage&&(this._imageViewer.graphics.remove(this._referencePointOnImage),this._referencePointOnImage.destroy()),this._referencePointOnImage=new i({geometry:{type:"point",..."toJSON"in e?e.toJSON():e},symbol:F.diamondSymbol}),this._imageViewer.graphics.add(this._referencePointOnImage))},a.setMessage=function(e,t,r){this.displayMessage={key:e,type:t,data:r}},a.updateCoverage=async function(){const e=new AbortController,{signal:t}=e;this._updateCoverageController=e;const{_imageViewer:r}=this;if(this._currentImage?.loaded&&r){const{width:e,height:o}=this._currentImage.rasterInfo,{xmin:a,xmax:n,ymin:s,ymax:l}=this._currentImage.fullExtent,g=[[0,0],[Math.min(r.width,e),0],[Math.min(r.width,e),Math.min(r.height,o)],[0,Math.min(r.height,o)]].map((e=>r.toMap(c.createScreenPoint(e[0],e[1]))));g.forEach((e=>{e.x=a<=e.x&&e.x<=n?e.x:Math.abs(a-e.x)>Math.abs(n-e.x)?n:a,e.y=s<=e.y&&e.y<=l?e.y:Math.abs(s-e.y)>Math.abs(l-e.y)?l:s}));const u=await w.transformPoints(g,{feature:this.getSelectedFeature(),currentCoveragePolygon:this.getSelectedFeaturePolygon(),imageProperties:this._currentImage.rasterInfo,options:{signal:t}});if(u&&!t.aborted){const e=[u.map((e=>[e.x,e.y,1]))];e[0].push(e[0][0]);const t=new V({hasZ:!0,rings:e,spatialReference:u[0].spatialReference});this.updateCurrentCoveragePolygon(new i({geometry:t,symbol:F.activePolygonSymbol,visible:this.isCurrentCoverageVisible}))}}},e._createClass(r,[{key:"active",get:function(){return!0===this.view?.map?.allLayers.some((e=>"oriented-imagery"===e.type&&e.loaded))}},{key:"currentImageView",get:function(){return this._imageViewer?.allLayerViews.find((e=>e.layer===this._currentImage))}},{key:"featureCount",get:function(){return this.features?.length??0}},{key:"hasImageLoaded",get:function(){return!!this._currentImage}},{key:"isAdditionalCoverageDisabled",get:function(){return!this._additionalCoveragePolygons?.length}},{key:"isAdditionalCoverageVisible",get:function(){return this._additionalCoveragePolygons?.getItemAt(0)?.visible??!1}},{key:"isAdditionalPointSourcesDisabled",get:function(){return!this._additionalFeatureGraphics?.length}},{key:"isAdditionalPointSourcesVisible",get:function(){return this._additionalFeatureGraphics?.getItemAt(0)?.visible??!1}},{key:"isCurrentCoverageDisabled",get:function(){return!this._currentCoveragePolygon}},{key:"isCurrentCoverageVisible",get:function(){return!!this._currentCoveragePolygon?.visible}},{key:"updating",get:function(){return!(this._imageViewer?.stationary??1)||(this.currentImageView?.updating??!1)||"loading"===this._currentImage?.loadStatus||!!this._fetchFeaturesController}},{key:"state",get:function(){const{active:e,hasImageLoaded:t,updating:r}=this;return r?"loading":t?"image-loaded":e?"ready":"disabled"}},{key:"view",set:function(e){this._set("view",e)}}]),r}(a.EventedAccessor);t.__decorate([g.property()],L.prototype,"active",null),t.__decorate([g.property()],L.prototype,"activeLayer",void 0),t.__decorate([g.property()],L.prototype,"shouldShowSelectedImage",void 0),t.__decorate([g.property()],L.prototype,"coverageFrustums",void 0),t.__decorate([g.property()],L.prototype,"coveragePolygons",void 0),t.__decorate([g.property()],L.prototype,"currentImageView",null),t.__decorate([g.property()],L.prototype,"displayMessage",void 0),t.__decorate([g.property()],L.prototype,"pointSources",void 0),t.__decorate([g.property()],L.prototype,"selectedFeature",void 0),t.__decorate([g.property()],L.prototype,"selectedPoint",void 0),t.__decorate([g.property({readOnly:!0})],L.prototype,"featureCount",null),t.__decorate([g.property()],L.prototype,"features",void 0),t.__decorate([g.property()],L.prototype,"hasImageLoaded",null),t.__decorate([g.property()],L.prototype,"isAdditionalCoverageDisabled",null),t.__decorate([g.property()],L.prototype,"isAdditionalCoverageVisible",null),t.__decorate([g.property()],L.prototype,"isAdditionalPointSourcesDisabled",null),t.__decorate([g.property()],L.prototype,"isAdditionalPointSourcesVisible",null),t.__decorate([g.property()],L.prototype,"isCurrentCoverageDisabled",null),t.__decorate([g.property()],L.prototype,"isCurrentCoverageVisible",null),t.__decorate([g.property()],L.prototype,"updating",null),t.__decorate([g.property()],L.prototype,"state",null),t.__decorate([g.property()],L.prototype,"view",null),t.__decorate([g.property()],L.prototype,"_additionalCoveragePolygons",void 0),t.__decorate([g.property()],L.prototype,"_additionalFeatureGraphics",void 0),t.__decorate([g.property()],L.prototype,"_currentCoveragePolygon",void 0),t.__decorate([g.property()],L.prototype,"_currentImage",void 0),t.__decorate([g.property()],L.prototype,"_fetchFeaturesController",void 0),t.__decorate([g.property()],L.prototype,"_imageViewer",void 0),t.__decorate([g.property()],L.prototype,"_initialCurrentCoveragePolygon",void 0),t.__decorate([g.property()],L.prototype,"_initialCurrentCoverageUpdate",void 0),t.__decorate([g.property()],L.prototype,"_overlays",void 0),t.__decorate([g.property()],L.prototype,"_referencePointOnGround",void 0),t.__decorate([g.property()],L.prototype,"_referencePointOnImage",void 0),t.__decorate([g.property()],L.prototype,"_selectedFeatureGraphic",void 0),L=t.__decorate([y.subclass("esri.widgets.OrientedImageryViewer.OrientedImageryViewerViewModel")],L);return L}));