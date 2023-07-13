/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Collection","../../../../core/Handles","../../../../core/handleUtils","../../../../core/Logger","../../../../core/maybe","../../../../core/PooledArray","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/aaBoundingRect","./FeatureTileDescriptor3D","./FeatureTileMeasurements3D","../../support/extentUtils","../../../support/Scheduler"],(function(e,t,i,r,s,n,o,l,a,c,u,h,d,_,p,T,y,f,g,m,S){"use strict";e.FeatureTileTree3D=function(e){function i(t){var i;return(i=e.call(this,t)||this).tiles=new s,i.tileSize=512,i._idToTile=new Map,i._handles=new n,i._clients=new Set,i._dirty=!1,i._pendingTiles=null,i._newTiles=new c,i}t._inherits(i,e);var r=i.prototype;return r.initialize=function(){this._handles.add([u.watch((()=>[this.tilingScheme,this.tileSize]),(()=>this._reset()),u.sync),u.watch((()=>[this.tileSize,this.cameraOnSurface?.location,this.tilingScheme,this.viewState?.contentCamera,this.focus?.location]),(()=>this._setDirty()),u.syncAndInitial)]),this.scheduler&&(this._frameWorker=this.scheduler.registerTask(S.TaskPriority.FEATURE_TILE_TREE,this))},r.destroy=function(){this._frameWorker=a.removeMaybe(this._frameWorker),this._handles=a.destroyMaybe(this._handles)},r.addClient=function(){const e=E();return this._clients.add(e),1===this._clients.size&&this._setDirty(),o.makeHandle((()=>this._removeClient(e)))},r._removeClient=function(e){this._clients.delete(e),this._hasClients||this._clear()},r._setDirty=function(){!this._hasClients||this.suspended||this._dirty||(this._frameWorker?(this._dirty=!0,this.notifyChange("updating")):this.runTask(S.noBudget))},r._clear=function(){this.tiles.removeAll(),this._idToTile.clear(),this._reset(),this._dirty=!1,this.notifyChange("updating")},r.runTask=function(e){this._dirty=!1,this._pendingTiles||(this._startUpdate(),null!=this._frameWorker&&(this._frameWorker.priority=S.TaskPriority.FEATURE_TILE_TREE_ACTIVE)),this._subdivideTilesForView(e),this._pendingTiles||null==this._frameWorker||(this._frameWorker.priority=S.TaskPriority.FEATURE_TILE_TREE),this.notifyChange("updating")},r._startUpdate=function(){if(this.suspended)return;if(!this.tilingScheme)return void this._clear();this._tileMeasurements||(this._tileMeasurements=new g.FeatureTileMeasurements3D({renderCoordsHelper:this.renderCoordsHelper,tilingScheme:this.tilingScheme,tileSize:this.tileSize}));const e=this.viewState.contentCamera;this._tileMeasurements.begin(e,this.focus.location,this.cameraOnSurface.location.z??0),this._pendingTiles=this._getRootTiles()},r._reset=function(){this._newTiles.clear(),this._tileMeasurements=null,this._pendingTiles=null,this._setDirty()},r._getRootTiles=function(){const{tilingScheme:e}=this;return this._rootTileIds.map((t=>new f.FeatureTileDescriptor3D(t[0],t[1],t[2],e)))},r._purgeHorizonTiles=function(e){e.sort(((e,t)=>{const i=e.measures.screenRect,r=t.measures.screenRect;return i[1]+i[3]-(r[1]+r[3])})),y.empty(D);for(let t=0;t<e.length;t++)if(y.expand(D,e.data[t].measures.screenRect,D),y.height(D)>F)return e.data.slice(t,e.length);return[]},r._subdivideTilesForView=function(e){if(!this._pendingTiles)return;const{tilingScheme:t}=this;for(;this._pendingTiles.length>0&&!e.done;){const i=this._pendingTiles.pop();e.madeProgress(),this._filterExtentRect&&!y.intersects(this._filterExtentRect,i.extent)||(this._tileMeasurements.updateTile(i),i.measures.visibility!==f.Visibility.INVISIBLE&&(i.measures.shouldSplit?(t.ensureMaxLod(i.lij[0]+1),this._pendingTiles.push(...i.getChildren())):this._newTiles.push(i)))}0===this._pendingTiles.length&&(this._updateTiles(this._purgeHorizonTiles(this._newTiles)),this._newTiles.clear(),this._tileMeasurements.end(),this._pendingTiles=null)},r._updateTiles=function(e){for(const r of this.tiles.items)r.used=!1;const t=e.filter((e=>{const t=this._idToTile.get(e.id);return t?(t.copyMeasurementsFrom(e),t.used=!0):this._idToTile.set(e.id,e),!t})),i=this.tiles.items.filter((e=>!e.used&&(this._idToTile.delete(e.id),!0)));this.tiles.removeMany(i),this.tiles.addMany(t),this._sortTiles()},r._sortTiles=function(){this.viewState.fixedContentCamera||this.tiles.sort(((e,t)=>e.measures.visibility!==t.measures.visibility?e.measures.visibility===f.Visibility.VISIBLE_ON_SURFACE?-1:1:e.measures.distance-t.measures.distance)),this.tiles.forEach(((e,t)=>e.loadPriority=t))},t._createClass(i,[{key:"tilingScheme",get:function(){const e=this.tilingSchemeOwner.tilingScheme;if(!e)return null;return e.clone()}},{key:"filterExtent",set:function(e){if(null!=e&&!e.spatialReference.equals(this.viewState.spatialReference))return void l.getLogger(this).error("#extent","extent spatial reference needs to be in the same spatial reference as the view");const t=this._get("filterExtent");if(t===e||null!=t&&e&&t.equals(e))return;const i=null!=e?e.clone():null;this._set("filterExtent",i),this._setDirty()}},{key:"_filterExtentRect",get:function(){if(null==this.filterExtent)return null;const e=y.create();return m.toBoundingRect(this.filterExtent,e,this.tilingScheme.spatialReference),e}},{key:"_rootTileIds",get:function(){const{tilingScheme:e}=this;return this._filterExtentRect&&e?e.rootTilesInExtent(this._filterExtentRect):[[0,0,0]]}},{key:"suspended",set:function(e){e!==this._get("suspended")&&(this._set("suspended",e),this._setDirty())}},{key:"updating",get:function(){return this._dirty||!!this._pendingTiles}},{key:"_hasClients",get:function(){return this._clients.size>0}},{key:"running",get:function(){return this.updating}}]),i}(r),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"scheduler",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"renderCoordsHelper",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"tilingSchemeOwner",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"cameraOnSurface",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"focus",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"viewState",void 0),i.__decorate([h.property({constructOnly:!0})],e.FeatureTileTree3D.prototype,"terrain",void 0),i.__decorate([h.property()],e.FeatureTileTree3D.prototype,"tiles",void 0),i.__decorate([h.property()],e.FeatureTileTree3D.prototype,"tileSize",void 0),i.__decorate([h.property({readOnly:!0})],e.FeatureTileTree3D.prototype,"tilingScheme",null),i.__decorate([h.property()],e.FeatureTileTree3D.prototype,"filterExtent",null),i.__decorate([h.property({readOnly:!0})],e.FeatureTileTree3D.prototype,"_filterExtentRect",null),i.__decorate([h.property({readOnly:!0})],e.FeatureTileTree3D.prototype,"_rootTileIds",null),i.__decorate([h.property({value:!1})],e.FeatureTileTree3D.prototype,"suspended",null),i.__decorate([h.property({readOnly:!0})],e.FeatureTileTree3D.prototype,"updating",null),e.FeatureTileTree3D=i.__decorate([T.subclass("esri.views.3d.layers.support.FeatureTileTree3D")],e.FeatureTileTree3D);let v=0;function E(){return v++}const D=y.create(),F=10;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));