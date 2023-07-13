/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/mathUtils","../../../core/maybe","../../../core/ObjectPool","../../../chunks/vec2","../../../chunks/vec2f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../chunks/common","../../../geometry/ellipsoidUtils","../../../geometry/support/aaBoundingRect","../../../chunks/sphere","../../../layers/support/layerUtils","../../2d/engine/vectorTiles/VectorTile","../support/StreamDataLoader","./ElevationBounds","./ElevationTileAgent","./interfaces","./ITile","./LayerClass","./MapTileAgent","./RasterTile","./TerrainConst","./terrainUtils","./TileAgent","./TilePerLayerInfo","./TileTexture","./TileUpdate","./tileUtils"],(function(e,t,i,n,s,r,a,o,l,h,u,d,c,f,g,p,y,_,T,E,m,A,I,L,v,N,M,D,x,C){"use strict";const b=.1;let U=function(){function s(){this.lij=[0,0,0],this._children=[null,null,null,null],this._pendingUpdates=0,this.renderData=null,this._dirty=!0,this._previouslyRendered=!1,this.extent=d.create(),this._elevationBounds=a.create(),this.layerInfo=[[],[]],this.extentInRadians=d.create(),this.centerAtSeaLevel=l.create(),this._center=[l.create(),c.create(),l.create()],this.up=l.unitZ(),this._isWithinClippingArea=!0,this._intersectsClippingArea=!0,this._maxTesselation=0,this._usedMemory=null,this._mapTileMemoryInternal=0,this._mapDataRefCount=0,this.screenDepth=0,this.renderOrder=0,this._edgeLen=0,this._edgeLen2=0,this._curvatureHeight=0,this.extentMidX=0,this.extentMidY=0,this.distanceToPOI=-1,this._lastPOI=l.create()}s.prune=function(){P.prune(0),R.prune(0),M.TilePerLayerInfo.prune()};var _=s.prototype;return _.computeVisibility=function(){this._dirty=!1;const e=this.parent,t=e?.frustumVisibility??E.TileFrustumVisibility.INTERSECTS;this._frustumVisibility=t===E.TileFrustumVisibility.INSIDE?E.TileFrustumVisibility.INSIDE:t===E.TileFrustumVisibility.OUTSIDE?E.TileFrustumVisibility.OUTSIDE:this._calculateFrustumVisibilityStatus(this.surface.frustum);const i=this._frustumVisibility!==E.TileFrustumVisibility.OUTSIDE&&this._intersectsClippingArea;i!==this._visible&&(this._visible=i,this._surface.emit("tiles-visibility-changed"),this._surface.renderer.setDirty(),this.updateAgentSuspension())},_.init=function(t,i,n){this.lij[0]=t[0],this.lij[1]=t[1],this.lij[2]=t[2],this.ellipsoid=u.getReferenceEllipsoid(n.tilingScheme.spatialReference),n.tilingScheme.getExtent(t[0],t[1],t[2],this.extent),n.tilingScheme.convertExtentToRadians(this.extent,this.extentInRadians),this.extentMidX=.5*(this.extent[0]+this.extent[2]),this.extentMidY=.5*(this.extent[1]+this.extent[3]),this._isWithinClippingArea=!0,this._intersectsClippingArea=!0,this._clippingArea=null,this._mapDataRefCount=0,n.upsampleMapCache.pop(this.key),this._edgeLen=0,this._edgeLen2=0,this._center[e.CenterPosition.MIDDLE][3]=0,this.elevationLevel=t?t[0]:0,i&&i.elevationBounds?r.copy(this._elevationBounds,i.elevationBounds):r.set(this._elevationBounds,0,0),this._pendingUpdates=0,this.renderData=null,this.screenDepth=0,this._visible=!1,this._previouslyRendered=!1,this._parent=i,this.unsetChildren(),this._surface=n,this.updateVisibility();for(const e of m.LayerClasses){const t=n.numLayers(e),i=this.layerInfo[e];for(const e of i)e.release();i.length=t;for(let n=0;n<t;n++)i[n]=M.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool),e===m.LayerClass.ELEVATION&&this.findElevationBoundsForLayer(n,-1)}this.computeElevationBounds(),this._maxTesselation=Math.min(n.tilingScheme.pixelSize,L.MAX_PATCH_TESSELATION)},_.release=function(){v.weakAssert(!this.renderData,"tile.renderData was not unloaded"),this._surface.upsampleMapCache.pop(this.key);for(const e of m.LayerClasses){for(const t of this.layerInfo[e])t.release();this.layerInfo[e].length=0}this._parent=null;for(let e=0;e<4;++e)this._children[e]=null;this._surface=null,this.setMemoryDirty()},_.refMapData=function(){++this._mapDataRefCount,this._isCached||this._surface.upsampleMapCache.pop(this.key)},_.unrefMapData=function(){if(--this._mapDataRefCount,this._isCached){this.setMemoryDirty();const e=this._cachedMemory;e>0&&this._surface.upsampleMapCache.put(this.key,this,e)}},_.setMemoryDirty=function(){this._usedMemory=null},_._ensureUsedMemory=function(){if(null!=this._usedMemory)return this._usedMemory;this._usedMemory=0,this._mapTileMemoryInternal=0;let e=0;for(const{data:i}of this.layerInfo[m.LayerClass.MAP])i instanceof g.VectorTile?e+=this._getTerrainDataMemory(i):this._mapTileMemoryInternal+=this._getTerrainDataMemory(i);const t=this._cpuImageMemorySize;for(const i of this.layerInfo[m.LayerClass.ELEVATION])this._usedMemory+=i.data?t:0;return this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,this._mapTileMemoryInternal+=this.renderData.texture?.gpuMemoryUsage??0),this._isCached&&this._surface.upsampleMapCache.updateSize(this.key,this,this._mapTileMemoryInternal+e),this._usedMemory},_.getUsedMemoryForLayer=function(e,t){const i=this.layerInfo[e][t];return i?.data?e===m.LayerClass.MAP?this._isCached?0:this._getTerrainDataMemory(i.data):e===m.LayerClass.ELEVATION?this._cpuImageMemorySize:0:0},_._getTerrainDataMemory=function(e){return e instanceof D?e.texture.gpuMemoryUsage:e instanceof HTMLImageElement||e instanceof p.ImageWithType?this._cpuImageMemorySize:e instanceof I.RasterTile?e.memoryUsage:e instanceof g.VectorTile?e.memoryUsed/e.referenced:0},_.updateScreenDepth=function(t){const i=this._center[e.CenterPosition.MIDDLE],n=t,s=i[0],r=i[1],a=i[2],o=n[2]*s+n[6]*r+n[10]*a+n[14];this.screenDepth=o<0?0:o/(n[3]*s+n[7]*r+n[11]*a+n[15])},_.shouldSplit=function(t,i,n){if(!this.visible)return x.TileUpdate.NONE;if(null!=t.frustum&&(!this._intersectsClippingArea||this._calculateFrustumVisibilityStatus(t.frustum)===E.TileFrustumVisibility.OUTSIDE))return x.TileUpdate.NONE;const s=this.level;o.subtract(F,this._center[e.CenterPosition.MIDDLE],i);let r=o.squaredLength(F),a=F,l=e.CenterPosition.MIDDLE;o.subtract(H,this._center[e.CenterPosition.TOP],i);const h=o.squaredLength(H);h<r&&(r=h,a=H,l=e.CenterPosition.TOP),o.subtract(X,this._center[e.CenterPosition.BOTTOM],i);const u=o.squaredLength(X);if(u<r&&(r=u,a=X,l=e.CenterPosition.BOTTOM),this._edgeLen2>r&&s<t.maxLod)return x.TileUpdate.SPLIT;const d=null!=n?n-s:1/0,c=Math.sqrt(r),f=t.fovX*c*2,g=this._edgeLen/f,p=()=>{if(s<t.maxLod)return this.elevationLevel=s,x.TileUpdate.NONE;const e=s+Math.ceil(-Math.log2(t.relativeWidthLimit/g));return e!==this.elevationLevel?(this.elevationLevel=e,x.TileUpdate.ELEVATION):x.TileUpdate.NONE};if(d<=.5)return p();const y=o.dot(this.up,F),_=this._elevationBounds[1]-this._elevationBounds[0],T=_/this.edgeLen;if(t.aboveGround&&y>0&&T<.001){if(y/c-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-T>0)return x.TileUpdate.NONE}const m=null!=n?3-Math.min(d,2):1;if(g*m<t.relativeWidthLimit||s>=t.maxLod)return p();if(s<7)return x.TileUpdate.SPLIT;o.scale(Y,this.up,y),o.subtract(Y,Y,a);const A=o.squaredLength(Y);if(A<=this.radius*this.radius)return x.TileUpdate.SPLIT;o.scale(Y,Y,this.radius/Math.sqrt(A)),o.add(Y,Y,this._center[l]),o.subtract(Y,i,Y);const I=Math.min(1,(Math.abs(o.dot(Y,this.up))+.5*_+this._curvatureHeight)/o.length(Y)),L=b/t.angledSplitBias,v=t.fovY*c*2;return I*(this._edgeLen/v*m)<L*t.relativeHeightLimit?x.TileUpdate.NONE:x.TileUpdate.SPLIT},_.setChildren=function(e,t,i,n){v.weakAssert(!!(e&&t&&i&&n),"Null child passed"),this._children[0]=e,this._children[1]=t,this._children[2]=i,this._children[3]=n},_.unsetChildren=function(){this._children[0]=null,this._children[1]=null,this._children[2]=null,this._children[3]=null},_.load=function(){this.refMapData();for(const e of m.LayerClasses)this._createOrUpdateAgents(0,e);this.surface.renderer.loadTile(this)},_.unload=function(e){e.unloadTile(this);for(const t of m.LayerClasses){const e=this.layerInfo[t];for(const t of e)t.loadingAgent&&t.loadingAgent!==N.TILE_AGENT_DONE&&(S(t.loadingAgent),t.loadingAgent=null),t.pendingUpdates=0}this.resetPendingUpdate(x.TileUpdate.GEOMETRY),this.resetPendingUpdate(x.TileUpdate.TEXTURE_NOFADING),this.resetPendingUpdate(x.TileUpdate.TEXTURE_FADING),this.unrefMapData()},_.unloadMapData=function(){const e=this.layerInfo[m.LayerClass.MAP];for(const t of e)t.loadingAgent&&t.loadingAgent!==N.TILE_AGENT_DONE&&(S(t.loadingAgent),t.loadingAgent=null),t.pendingUpdates=0;this.renderData&&this.renderData.releaseTexture(),this.setMemoryDirty()},_.updateClippingStatus=function(e){if(d.equals(e,this._clippingArea))return!1;const t=this._intersectsClippingArea,i=this._isWithinClippingArea;null!=e?(this._intersectsClippingArea=this.intersectsExtent(e),this._isWithinClippingArea=this._isWithinExtent(e)):(this._intersectsClippingArea=!0,this._isWithinClippingArea=!0),this._clippingArea=e,this.updateVisibility();const n=i&&this._isWithinClippingArea,s=!(i||t||this._isWithinClippingArea||this._intersectsClippingArea);return!this.renderData||n||s||this.setPendingUpdate(x.TileUpdate.GEOMETRY),!0},_.updateVisibility=function(){this._dirty=!0,this._surface.setTileTreeDirty()},_.getLayerInfo=function(e,t){return this.layerInfo[t][e]},_.hasLayerData=function(e,t){const i=this.layerInfo[t][e];return!(!i||!i.data||i.dataInvalidated)},_._isSuspended=function(e){return!!this.hasPendingUpdate(x.TileUpdate.SPLIT)||e!==m.LayerClass.ELEVATION&&!this.loadable},_.hasPendingUpdate=function(e){return(this._pendingUpdates&e)===e},_.setPendingUpdate=function(e){this._pendingUpdates|=e,e===x.TileUpdate.SPLIT||e===x.TileUpdate.MERGE?this._surface.setTileTreeDirty():this._surface.requestUpdate()},_.resetPendingUpdate=function(e){return!!this.hasPendingUpdate(e)&&(this._pendingUpdates&=~e,!0)},_.requestLayerData=function(e,t,i){const s=this.layerInfo[t][e];if(s.waitingAgents.has(i))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),i.tile.lij.toString(),t,e),!0;if(s.waitingAgents.push(i),s.data&&!s.dataInvalidated){console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),i.tile.lij.toString(),t,e);const n=s.data&&"type"in s.data&&"vector-tile"===s.data.type;return i.dataArrived(this,n),!0}if(s.requestPromise)return!0;n.abortMaybe(s.requestAbort),s.requestAbort=new AbortController;const r=this._surface.requestTileData(this,e,t,s.requestAbort);if(!r)return s.requestAbort=null,!1;const a=()=>{s.requestPromise===r&&(s.requestPromise=null,s.requestAbort=null)};return s.requestPromise=r,r.then(a,a),!0},_.hasLij=function(e){return this.lij[0]===e[0]&&this.lij[1]===e[1]&&this.lij[2]===e[2]},_.findByLij=function(e){if(this.hasLij(e))return this;const t=this._children;if(!t[0])return null;return t[0].findByLij(e)||t[1].findByLij(e)||t[2].findByLij(e)||t[3].findByLij(e)},_.distanceToSquared=function(t){return o.squaredLength(o.subtract(Y,this._center[e.CenterPosition.MIDDLE],t))},_.containsPoint=function(e){const t=this.extent;return e[0]>=t[0]&&e[1]>=t[1]&&e[0]<=t[2]&&e[1]<=t[3]},_.containsPointXY=function(e,t){const i=this.extent;return e>=i[0]&&t>=i[1]&&e<=i[2]&&t<=i[3]},_.unrequestLayerData=function(e,t,i){const n=this.layerInfo[t][e],s=n.waitingAgents,r=null!=s.removeUnordered(i);v.weakAssert(r,"agent has not requested this piece of map data"),s.length<1&&(n.abortRequest(),this.setMemoryDirty())},_.dataArrived=function(e,t,i){const n=null!=i&&"type"in i&&"vector-tile"===i.type,s=this.layerInfo[t][e];s.data=i,s.dataInvalidated=!1,s.waitingAgents.forAll((e=>e.dataArrived(this,n))),s.waitingAgents.clear(),this.setMemoryDirty()},_.dataMissing=function(e,t,i){i.notInTilemap||console.error(`Tile ${this.lij.toString()} layer ${t}/${e} error ${i}`);const n=this.layerInfo[t][e];n.dataMissing=!0,n.waitingAgents.forAll((e=>e.dataMissing())),n.waitingAgents.clear(),this.setMemoryDirty()},_.updateRenderData=function(e,t,i){switch(i&&this.forEachLoadedNeighbor((i=>i.updateRenderData(e,t))),e){case m.LayerClass.MAP:return this._updateTexture(t);case m.LayerClass.ELEVATION:return this._updateGeometry()}},_._updateTexture=function(e){this.renderData&&(this.resetPendingUpdate(e===T.TextureUpdate.FADING?x.TileUpdate.TEXTURE_NOFADING:x.TileUpdate.TEXTURE_FADING),this.setPendingUpdate(e===T.TextureUpdate.FADING?x.TileUpdate.TEXTURE_FADING:x.TileUpdate.TEXTURE_NOFADING))},_._updateGeometry=function(){this.setPendingUpdate(x.TileUpdate.GEOMETRY);for(const e of this.layerInfo[m.LayerClass.ELEVATION])e.pendingUpdates|=x.TileUpdate.GEOMETRY},_.invalidateLayerData=function(e,t){this.layerInfo[t][e].invalidateSourceData(),this.restartAgents(t)},_.computeElevationBounds=function(){const e=this._elevationBounds,t=e[0],i=e[1];r.set(e,1/0,-1/0);const n=this.layerInfo[m.LayerClass.ELEVATION];let s=!0;for(const r of n)null!=r.elevationBounds&&(e[0]=Math.min(e[0],r.elevationBounds.min),e[1]=Math.max(e[1],r.elevationBounds.max),r.elevationBounds.hasNoDataValues||(s=!1));s&&(e[0]=Math.min(e[0],0),e[1]=Math.max(e[1],0)),t===e[0]&&i===e[1]||(this.updateRadiusAndCenter(),this._surface.setTileTreeDirty())},_._updateCenter=function(){const t=this._elevationBounds,i=.5*(t[0]+t[1]),n=this._center;o.scale(Y,this.up,i),o.add(n[e.CenterPosition.MIDDLE],this.centerAtSeaLevel,Y),o.scale(Y,this.up,t[0]),o.add(n[e.CenterPosition.TOP],this.centerAtSeaLevel,Y),o.scale(Y,this.up,t[1]),o.add(n[e.CenterPosition.BOTTOM],this.centerAtSeaLevel,Y)},_.findElevationBoundsForLayer=function(e,t){const i=this.layerInfo[m.LayerClass.ELEVATION][e],n=L.getElevationDesiredResolutionLevel(this.level),s=Math.max(this.elevationLevel-n,0),r=i.elevationBounds;if(null!=r&&r.level>=t&&r.level<=s)return;const a=this._surface.layerViewByIndex(e,m.LayerClass.ELEVATION),o=v.getLayerWithExtentRange(a);if(!C.fallsWithinLayer(this,o,!1))return;const l=k;let h=!1;const u=i.data;if(u&&u.level<=s){const e=i.data;l.min=e.samplerData.data.minValue,l.max=e.samplerData.data.maxValue,l.hasNoDataValues=e.samplerData.data.hasNoDataValues,l.level=this.level,h=!0}else{let t,i,r=0;for(let a=this._parent;a&&(!i||r<n)&&(r=this.elevationLevel-a.level,t=i||t,i=a.layerInfo[m.LayerClass.ELEVATION][e].data,!(!i&&t&&a.level<=s));a=a.parent);i=i||t,i&&(i.computeMinMaxValue(this.lij[0],this.lij[1],this.lij[2],l),l.min!==1/0&&(l.level=i.level,h=!0))}h&&(null==i.elevationBounds&&(i.elevationBounds=new y.ElevationBounds),i.elevationBounds.copyFrom(l))},_.modifyLayers=function(e,t,i){const n=this.layerInfo[i];for(const a of n)a.loadingAgent&&a.loadingAgent!==N.TILE_AGENT_DONE&&(S(a.loadingAgent),a.loadingAgent=null),a.waitingAgents.clear();for(let a=0;a<n.length;++a)void 0===e[a]&&n[a].release();const s=new Array(...n),r=t.length;n.length=r;for(let a=0;a<r;a++){const e=t[a];n[a]=e>-1?s[e]:M.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool)}this.setMemoryDirty()},_.restartAgents=function(e){this.renderData&&(this._createOrUpdateAgents(0,e),this.updateRenderData(e,T.TextureUpdate.FADING))},_.updateAgents=function(e){if(this.renderData){const t=this.layerInfo[e];for(const e of t)e.loadingAgent===N.TILE_AGENT_DONE&&(e.loadingAgent=null);this._createOrUpdateAgents(0,e)}},_.updateAgentSuspension=function(){for(const e of m.LayerClasses){const t=this._isSuspended(e);for(const i of this.layerInfo[e])i.loadingAgent&&i.loadingAgent!==N.TILE_AGENT_DONE&&(i.loadingAgent.setSuspension(t),i.loadingAgent===N.TILE_AGENT_DONE&&this.updateRenderData(e,T.TextureUpdate.FADING))}},_.removeLayerAgent=function(e,t){const i=this.layerInfo[t][e];i.loadingAgent&&i.loadingAgent!==N.TILE_AGENT_DONE&&i.loadingAgent.dispose(),i.loadingAgent=null},_.agentDone=function(e,t){const i=this.layerInfo[t][e];i.loadingAgent=N.TILE_AGENT_DONE,i.data||null!=i.upsampleInfo||this._createOrUpdateAgents(e+1,t)},_._hasBlendableAncestor=function(e){return"normal"!==e.blendMode||f.isGroupLayer(e.parent)&&this._hasBlendableAncestor(e.parent)},_._hasBlendModes=function(e,t,i){for(let n=e;n<t;++n){const e=this._surface.layerViewByIndex(n,i);if(v.isBlendableLayerView(e)&&"normal"!==e?.layer?.blendMode||f.isGroupLayer(e?.layer?.parent)&&this._hasBlendableAncestor(e?.layer?.parent))return!0}return!1},_._createOrUpdateAgents=function(e,t){const i=this.layerInfo[t];if(0===i.length)return;const n=this._isSuspended(t);for(let s=e;s<i.length;++s){const r=i[s];let a=!1;const o=this._surface.layerViewByIndex(s,t),l=v.getLayerWithExtentRange(o);if(r.loadingAgent?C.fallsWithinLayer(this,l,!1)?(r.loadingAgent!==N.TILE_AGENT_DONE&&r.loadingAgent.setSuspension(n),r.loadingAgent!==N.TILE_AGENT_DONE&&(a=r.loadingAgent.update())):r.dispose():C.fallsWithinLayer(this,l,!1)&&(r.loadingAgent=O(this,s,t,n),a=r.loadingAgent.startLoading(),a?r.loadingAgent===N.TILE_AGENT_DONE&&this.setPendingUpdate(x.TileUpdate.GEOMETRY):(S(r.loadingAgent),r.loadingAgent=N.TILE_AGENT_DONE)),r.loadingAgent===N.TILE_AGENT_DONE&&this.updateRenderData(t,T.TextureUpdate.FADING),!this._hasBlendModes(e,i.length,t)&&a&&o.isOpaque)return}},_._isWithinExtent=function(e){const t=this.extent;return t[0]>=e[0]&&e[2]>=t[2]&&t[1]>=e[1]&&e[3]>=t[3]},_.intersectsExtent=function(e){const t=this.extent;return t[2]>=e[0]&&e[2]>=t[0]&&t[3]>=e[1]&&e[3]>=t[1]},_.getElevationVerticesPerSide=function(e){const t=this.elevationLevel-this.level,n=Math.max(this.level-e,L.getElevationDesiredResolutionLevel(this.level)-t),s=i.clamp(1+(this.maxTesselation>>n),2,this.maxTesselation+1),r=this.getDefaultVerticesPerSide();return Math.max(s,r)},_._findLIJ=function(e,t){if(!e)return null;const i=this.surface.rootTiles;if(null!=i)for(const n of i)if(V(n,e)){let i=n,s=e[0]-i.level-1;for(;s>=0&&!i.isLeaf&&!t(i);){const t=e[1]>>s&1,n=e[2]>>s&1;i=i.children[2*t+n],s--}return t(i)?i:null}return null},_.findNeighborTile=function(e,t){const i=this.lij,n=this.getNeighborLIJ(i,e);return n?G(i,n)?t(this)?this:null:this._findLIJ(n,t):null},_.findCorner=function(e,t){const i=e===E.NeighborIndex.NORTH_EAST?1:e===E.NeighborIndex.NORTH_WEST?0:e===E.NeighborIndex.SOUTH_WEST?2:3;let n=this;for(;n.children[0]&&(!t||!t(n));)n=n.children[i];return n},_.findNeighborCornerTileExact=function(e,t){return this.findNeighborTile(e,(e=>t(e)||e.level===this.level))?.findCorner(v.oppositeCorner(e),t)||null},_.forAllSubtreeOnSide=function(e,t){const i=e===E.NeighborIndex.NORTH?[0,1]:e===E.NeighborIndex.NORTH_EAST?[1]:e===E.NeighborIndex.EAST?[1,3]:e===E.NeighborIndex.SOUTH_EAST?[3]:e===E.NeighborIndex.SOUTH?[2,3]:e===E.NeighborIndex.SOUTH_WEST?[2]:e===E.NeighborIndex.WEST?[0,2]:[0],n=e=>{const s=e.children;!t(e)&&s[0]&&i.forEach((e=>n(s[e])))};n(this)},_.forallNeighbors=function(e){v.neighborCornerIndices.forEach((t=>this.findNeighborCornerTileExact(t,e))),v.neighborEdgeIndices.forEach((t=>this.findNeighborTile(t,(t=>t.level===this.level||e(t)))?.forAllSubtreeOnSide(v.oppositeEdge(t),e)))},_.getNeighborEdgeStartVertexIndex=function(e,t){if(!t)return 0;const i=this.level-t.level;if(v.internalAssert(!v.ENABLE_TERRAIN_INTERNAL_CHECKS||i>=0),0===i)return 0;const n=2**i,s=1==(1&e),r=s?0:1,a=t.lij[r+1]*n,o=this.lij[r+1],l=o-a,h=s?n-1-l:l;return v.ENABLE_TERRAIN_INTERNAL_CHECKS&&(v.internalAssert(a<=o&&o<a+n),v.internalAssert(0<=h&&h<n)),h},_.forEachLoadedNeighbor=function(e){const t=this.level,i=e=>e.level===t||e.isLoaded;v.neighborEdgeIndices.forEach((t=>{const n=this.findNeighborTile(t,i);null!=n&&n!==this&&n.forAllSubtreeOnSide(v.oppositeEdge(t),(i=>!!i.isLoaded&&(e(i,t),!0)))})),v.neighborCornerIndices.forEach((t=>{const n=this.findNeighborTile(t,i)?.findCorner(v.oppositeCorner(t),(e=>e.isLoaded));v.internalAssert(!n||j(this,n,t)),n?.isLoaded&&e(n,t)}))},_.getNeighborLIJ=function(e,t){const i=v.isNorth(t)?-1:v.isSouth(t)?1:0,n=v.isWest(t)?-1:v.isEast(t)?1:0,s=[e[0],e[1]+i,e[2]+n];return s[1]<0?null:this.surface.isGlobal?this.wrapLIJ(s):s[2]<0?null:s},_.wrapLIJ=function(e){return!e||e[1]<0||e[1]>=2**e[0]?null:this.surface.wrapEastWest(e)},_.checkGeometryWaterproofness=function(){v.ENABLE_WATERPROOFNESS_TESTS&&(v.internalAssert(this.isLoaded),this.renderData?.checkGeometryWaterproofness())},_.shouldHaveNeighbor=function(e){const t=this.extent,i=this.surface.rootTilesExtent,n=.25*(t[2]-t[0]);if(v.isNorth(e)&&t[3]+n>=i[3])return!1;if(v.isSouth(e)&&t[1]-n<=i[1])return!1;const s=this.surface.isGlobal;return!(!s&&v.isWest(e)&&t[0]-n<=i[0])&&!(!s&&v.isEast(e)&&t[2]+n>=i[2])},_.updateDistanceToPOI=function(t){const i=this._lastPOI;if(this.distanceToPOI>=0&&i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2])return;o.copy(this._lastPOI,t);const n=this._center[e.CenterPosition.MIDDLE],s=t[0]-n[0],r=t[1]-n[1],a=t[2]-n[2];this.distanceToPOI=s*s+r*r+a*a},t._createClass(s,[{key:"_isCached",get:function(){return!this.shouldLoad&&this._mapDataRefCount<=0}},{key:"maxTesselation",get:function(){return this._maxTesselation}},{key:"isWithinClippingArea",get:function(){return this._isWithinClippingArea}},{key:"intersectsClippingArea",get:function(){return this._intersectsClippingArea}},{key:"clippingArea",get:function(){return this._clippingArea}},{key:"parent",get:function(){return this._parent}},{key:"children",get:function(){return this._children}},{key:"surface",get:function(){return this._surface}},{key:"elevationBounds",get:function(){return this._elevationBounds}},{key:"level",get:function(){return this.lij[0]}},{key:"key",get:function(){return`${this.lij[0]}/${this.lij[1]}/${this.lij[2]}`}},{key:"edgeLen",get:function(){return this._edgeLen}},{key:"radius",get:function(){return this._center[e.CenterPosition.MIDDLE][3]}},{key:"visible",get:function(){return this._dirty&&this.computeVisibility(),this._visible}},{key:"frustumVisibility",get:function(){return this._dirty&&this.computeVisibility(),this._frustumVisibility}},{key:"loadable",get:function(){return this.visible||this._surface.view.state.fixedContentCamera}},{key:"rendered",get:function(){const e=!!this.renderData;return e!==this._previouslyRendered&&(this._surface.emit("tiles-visibility-changed"),this._previouslyRendered=e,this._surface.renderer.setDirty()),e}},{key:"shouldLoad",get:function(){return this.isLeaf}},{key:"usedMemory",get:function(){return this._ensureUsedMemory()+(this._isCached?0:this._mapTileMemoryInternal)}},{key:"_cachedMemory",get:function(){return this._isCached?this._mapTileMemory:0}},{key:"_mapTileMemory",get:function(){return this._ensureUsedMemory(),this.layerInfo[m.LayerClass.MAP].reduce(((e,t)=>e+(t instanceof g.VectorTile?t.memoryUsed/t.referenced:0)),this._mapTileMemoryInternal)}},{key:"_cpuImageMemorySize",get:function(){const e=4,t=this._surface.tilingScheme.pixelSize;return t*t*e}},{key:"isLoaded",get:function(){return this.renderData?.hasGeometry??!1}},{key:"updating",get:function(){if(this.hasPendingUpdates)return!0;for(const e of m.LayerClasses){const t=this.layerInfo[e];for(const e of t)if(e.loadingAgent&&e.loadingAgent!==N.TILE_AGENT_DONE&&e.loadingAgent.updating)return!0}return!1}},{key:"hasPendingUpdates",get:function(){return 0!==this._pendingUpdates}},{key:"isLeaf",get:function(){return null==this._children[0]}},{key:"test",get:function(){return{cachedMemory:this._cachedMemory}}},{key:"westNeighborWestExtent",get:function(){return this.extent[0]*(this.isWestEnd?-1:1)}},{key:"eastNeighborEastExtent",get:function(){return this.extent[2]*(this.isEastEnd?-1:1)}},{key:"isEastEnd",get:function(){return this.lij[2]===this.surface.lijEastEnd(this.level)-1}},{key:"isWestEnd",get:function(){return 0===this.lij[2]}},{key:"isNorthEnd",get:function(){return 0===this.lij[1]}},{key:"isSouthEnd",get:function(){const e=this.surface.extent,t=e?.[1]??null;return null!=t&&this.extent[1]+h.getEpsilon()>=t}}]),s}();function O(e,t,i,n){const s=i===m.LayerClass.ELEVATION?R.acquire():P.acquire();return s.init(e,t,i,n),s}function S(e){e.dispose(),e instanceof _.ElevationTileAgent?R.release(e):e instanceof A.MapTileAgent&&P.release(e)}const P=new s(A.MapTileAgent),R=new s(_.ElevationTileAgent),k=new y.ElevationBounds;var B;function V(e,t){const i=e.level,n=t[0];if(i>n)return!1;const s=n-i,r=Math.floor(t[1]/2**s),a=Math.floor(t[2]/2**s);return r===e.lij[1]&&a===e.lij[2]}function G(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function q(e,t,i){if(null==e||null==t)return!1;if(0===e.level&&0===t.level){if(e.isEastEnd&&t.isWestEnd&&i===E.NeighborIndex.EAST)return!0;if(e.isWestEnd&&t.isEastEnd&&i===E.NeighborIndex.WEST)return!0}const n=Math.max(1e-6*(e.extent[2]-e.extent[0]),1);switch(i){case E.NeighborIndex.NORTH:return v.almostEquals(e.extent[3],t.extent[1],n);case E.NeighborIndex.SOUTH:return v.almostEquals(e.extent[1],t.extent[3],n);case E.NeighborIndex.EAST:return v.almostEquals(e.extent[2],t.extent[0],n)||v.almostEquals(e.extent[2],-t.extent[0],n);case E.NeighborIndex.WEST:return v.almostEquals(e.extent[0],t.extent[2],n)||v.almostEquals(e.extent[0],-t.extent[2],n)}}function j(e,t,i){return null!=e&&null!=t&&t!==e&&(e.level>=t.level?W(e,t,i):W(t,e,v.oppositeCorner(i)))}function W(e,t,i){v.internalAssert(e.level>=t.level);const n=v.isWestCorner(i),s=v.isNorthCorner(i),r=e.extent,a=t.extent,o=[n?r[0]:r[2],s?r[3]:r[1]],l=[n?a[2]:a[0],s?a[1]:a[3]],h=1e-5*(r[2]-r[0]),u=v.almostEquals(o[0],l[0],h)||e.surface.isGlobal&&v.almostEquals(o[0],-l[0],h),d=v.almostEquals(o[1],l[1],h);if(u&&d)return!0;if(e.level===t.level)return v.internalAssert(!1),!1;if(!u&&!d)return v.internalAssert(!1),!1;const c=u?w(a[1],a[3],r[1],r[3],h):w(a[0],a[2],r[0],r[2],h);return v.internalAssert(c),c}function w(e,t,i,n,s){return e-s<=i&&i<=n&&n<=t+s}e.CenterPosition=void 0,(B=e.CenterPosition||(e.CenterPosition={}))[B.TOP=0]="TOP",B[B.MIDDLE=1]="MIDDLE",B[B.BOTTOM=2]="BOTTOM";const F=l.create(),H=l.create(),X=l.create(),Y=l.create();e.Tile=U,e.isCornerNeighbor=j,e.isEdgeNeighbor=q,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
