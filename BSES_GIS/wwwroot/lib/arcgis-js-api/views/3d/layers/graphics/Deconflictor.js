/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/mathUtils","../../../../core/PooledArray","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/ellipsoidUtils","../../../../geometry/support/aaBoundingRect","../../../../chunks/boundedPlane","../../../../geometry/support/ray","../../../../chunks/sphere","./deconflictorDebug","./enums","../../webgl-engine/lib/Camera","../../webgl-engine/lib/screenSizePerspectiveUtils","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/HUDMaterial","../../webgl-engine/materials/ScaleInfo"],(function(i,t,e,s,r,n,a,c,o,l,h,u,p,f,d,_,g,b,y,v,S,m,G,D,w,B,N,V,C,I){"use strict";const P=_.create(),A=b.create(),M=b.create(),O=_.create(),x=p.create(),E=G.create(),k=m.create(),F=_.create(),z=v.create();let T=t._createClass((function(){this.aabr=v.create(),this.distance=0,this.culled=!1,this.visible=!1})),X=t._createClass((function(i,t){this.graphics3DGraphic=i,this.slicePlaneEnabled=t,this.info={}}));var R;i.State=void 0,(R=i.State||(i.State={}))[R.Idle=0]="Idle",R[R.Process=1]="Process",R[R.Sort=2]="Sort",R[R.Deconflict=3]="Deconflict",R[R.NumStates=4]="NumStates";let L=function(){function i(){this.camera=new B.Camera,this.slicePlane=S.create(),this.slicePlaneEnabled=!1}return i.prototype.copyFrom=function(i){this.camera.copyFrom(i.camera),S.copy(i.slicePlane,this.slicePlane),this.slicePlaneEnabled=i.slicePlaneEnabled},t._createClass(i)}();function Y(i,t){const e=i.graphics3DGraphic;e.destroyed||e.setVisibilityFlag(t,w.VisibilityFlag.DECONFLICTION,!0)}function*U(i){if(Map.prototype.entries){const t=i.entries();for(let i=t.next();!i.done;i=t.next())yield i.value[1]}else yield*i.values()}function*j(i,t,e){t.clear(),i.forEach(((i,s)=>{const r=t.pushNew();r.id=s,r.visible=i.graphics3DGraphic.getVisibilityFlag(e,w.VisibilityFlag.DECONFLICTION);const n=i.info&&i.info[e];r.prio=i.graphics3DGraphic.deconflictionPriority,r.distance=n?n.distance:Number.MAX_VALUE})),yield;const s=t.iterableSort(((i,t)=>i.prio!==t.prio?t.prio-i.prio:i.distance!==t.distance?i.distance-t.distance:i.visible!==t.visible?i.visible?-1:1:i.id-t.id));for(let r=s.next();!r.done;r=s.next())yield;t.forAll((t=>{const e=i.get(t.id);e&&(i.delete(t.id),i.set(t.id,e))})),t.clear()}i.Deconflictor=function(e){function s(t){var s;return(s=e.call(this,t)||this)._dirty=!1,s._runningViewState=new L,s._state=i.State.Idle,s._active=new Map,s._visible=new Map,s._iterators=new H,s._accBinsNumX=15,s._accBinsNumY=20,s._accBinsSizeX=0,s._accBinsSizeY=0,s._accBins=null,s.accNumTests=0,s}t._inherits(s,e);var a=s.prototype;return a.destroy=function(){this._active.clear(),this._visible.clear(),this._iterators=null},a.setDirty=function(){!this._dirty&&this._active.size>0&&(this._dirty=!0,this.notifyChange("updating"))},a.runTask=function(t){switch(this._state){case i.State.Idle:this._startUpdate(),t.madeProgress();case i.State.Process:if(this._state=i.State.Process,!this._processActiveGraphics(t))return;case i.State.Sort:if(this._state=i.State.Sort,!this._sortVisibleGraphics(t))return;case i.State.Deconflict:if(this._state=i.State.Deconflict,!this._deconflictVisibleGraphics(t))return;default:D.drawAccelerationStruct(this,this._visible),this._state=i.State.Idle,this.notifyChange("updating")}},a.modifyGraphics=function(i,t){t?i.forEach((i=>this.addToActiveGraphics(i))):i.forEach((i=>this.removeFromActiveGraphics(i))),this.setDirty()},a.layerSupportsDeconfliction=function(i){if(null==i||"object3d"!==i.type)return!1;const t=i.stageObject;if(1!==(t?t.geometries.length:0))return!1;const e=t?.geometries[0],s=e?.material;return s instanceof C.HUDMaterial},a._startUpdate=function(){D.prepare(this.view),this._dirty=!1,this._runningViewState.copyFrom(this.viewState);const{fullWidth:i,fullHeight:t}=this._runningViewState.camera;this._initBins(i,t),this._resetIterators()},a.addToActiveGraphics=function(i){i.info[this.visibilityGroup]=new T,this._active.set(i.graphics3DGraphic.graphic.uid,i),this.setDirty()},a.removeFromActiveGraphics=function(i){this._visible.delete(i.graphics3DGraphic.graphic.uid),Y(i,this.visibilityGroup),delete i.info[this.visibilityGroup],this._active.delete(i.graphics3DGraphic.graphic.uid),this.setDirty()},a._processActiveGraphics=function(i){const t=this._ensureActiveGraphicsIterator(),e=u.invertOrIdentity(x,this._runningViewState.camera.projectionMatrix),s="global"===this.view.viewingMode&&1===this.view.map.ground.opacity&&this._runningViewState.camera.relativeElevation>0?E:null;let r=0;for(null!=s&&(d.transformMat4(s,_.ZEROS,this._runningViewState.camera.viewMatrix),s[3]=y.getReferenceEllipsoid(this.view.spatialReference).radius,r=G.distanceToSilhouette(s,_.ZEROS));!i.done;){i.madeProgress();const n=t.next();if(!0===n.done)return this._resetActiveGraphicsIterator(),!0;const a=n.value,c=a&&a.info[this.visibilityGroup];c&&(this._collectGraphics3DGraphics(a,e,s,r),c.culled?this._visible.delete(a.graphics3DGraphic.graphic.uid):this._visible.set(a.graphics3DGraphic.graphic.uid,a))}return!1},a._sortVisibleGraphics=function(i){const t=this._ensureSortGraphicsIterator();for(;!i.done;){const e=t.next();if(i.madeProgress(),!0===e.done)return this._resetSortGraphicsIterator(),!0}return!1},a._deconflictVisibleGraphics=function(i){const t=this._ensureVisibleGraphicsIterator(),e=this.visibilityGroup===w.VisibilityGroup.LABEL;for(;!i.done;){i.madeProgress();const s=t.next();if(!0===s.done)return this._resetVisibleGraphicsIterator(),!0;const r=s.value,n=r.info[this.visibilityGroup];if(!n||n.culled)continue;const a=r.graphics3DGraphic,c=!e||a.isVisible();n.visible=c&&!this._isConflicted(r),n.visible&&this._addToBins(r),this._setGraphicVisibility(r,n.visible),D.drawPoly(n,n.visible)}return!1},a._resetIterators=function(){this._iterators.active=null,this._iterators.visible=null,this._iterators.sort=null},a._ensureActiveGraphicsIterator=function(){return this._iterators.active||(this._iterators.active=U(this._active)),this._iterators.active},a._resetActiveGraphicsIterator=function(){this._iterators.active=null},a._ensureVisibleGraphicsIterator=function(){return this._iterators.visible||(this._iterators.visible=U(this._visible)),this._iterators.visible},a._resetVisibleGraphicsIterator=function(){this._iterators.visible=null},a._ensureSortGraphicsIterator=function(){return this._iterators.sort||(this._iterators.sort=j(this._visible,this._iterators.sortArray,this.visibilityGroup)),this._iterators.sort},a._resetSortGraphicsIterator=function(){this._iterators.sort=null},a._collectGraphics3DGraphics=function(i,t,e,s){const r=i.graphics3DGraphic;if(r.destroyed)return;const n=i.info[this.visibilityGroup];if(!r.isVisible(w.VisibilityGroup.GRAPHIC,w.VisibilityFlag.DECONFLICTION))return void(n.culled=!0);const a=this.getGraphicsLayers(r);v.empty(n.aabr);let c=null;for(const o of a){if(!this.layerSupportsDeconfliction(o))continue;const r=o.stageObject.geometries[0].material;if(null==c&&(c=q,this._getProjectionInfo(o,t,c),c.isOutsideScreen||this._isCulledBySlice(i,P)||null!=e&&this._isCulledByHorizon(c,e,s)))return void(n.culled=!0);this._expandBoundingRect(n,o,r,c)}null==c?n.culled=!0:(n.distance=c.distance,n.culled=!1)},a._getProjectionInfo=function(i,t,e){const s=this._runningViewState.camera,r=i.stageObject,n=r.geometries[0],a=n.material,c=G.getCenter(r.boundingVolumeWorldSpace.bounds);d.transformMat4(P,c,s.viewMatrix);const o=n.vertexAttributes,l=o.get(V.VertexAttribute.NORMAL).data,h=o.get(V.VertexAttribute.AUXPOS1).data;a.applyShaderOffsetsView(P,l,r.transformation,h,s,e.scaleInfo,P),g.set(A,P[0],P[1],P[2],1),g.transformMat4(M,A,s.projectionMatrix),d.scale(e.positionNDC,M,1/M[3]),a.applyShaderOffsetsNDC(e.positionNDC,h,s,e.positionNDC,O),e.distanceWithoutPolygonOffset=s.depthNDCToWorld(O[2]),e.distance=O[2]===e.positionNDC[2]?e.distanceWithoutPolygonOffset:s.depthNDCToWorld(e.positionNDC[2]),g.set(M,e.positionNDC[0],e.positionNDC[1],e.positionNDC[2],1),g.transformMat4(A,M,t),g.scale(A,A,1/A[3]),d.set(e.positionView,P[0],P[1],P[2])},a._isCulledByHorizon=function(i,t,e){return d.copy(k.direction,i.positionView),d.set(k.origin,0,0,0),!!G.intersectRay(t,k,F)&&i.distanceWithoutPolygonOffset>e},a._isCulledBySlice=function(i,t){return i.slicePlaneEnabled&&this._runningViewState.slicePlaneEnabled&&S.extrusionContainsPoint(this._runningViewState.slicePlane,t)},a._expandBoundingRect=function(i,t,e,{positionNDC:s,scaleInfo:n}){const a=this._runningViewState.camera,c=t.getScreenSize(Z);N.applyPrecomputedScaleFactor(c,n.factor,c),c[0]*=a.pixelRatio,c[1]*=a.pixelRatio;const o=v.offset(e.calculateRelativeScreenBounds(c,n.factorAlignment.scale,z),r.lerp(0,a.fullWidth,.5+.5*s[0]),r.lerp(0,a.fullHeight,.5+.5*s[1])),l=this.iconMarginFactor;if(0!==l){const i=l*Math.min(v.width(o),v.height(o));o[0]-=i,o[1]-=i,o[2]+=i,o[3]+=i}v.expand(i.aabr,o,i.aabr)},a._isConflicted=function(i){const t=i.graphics3DGraphic.graphic.uid,e=i.info[this.visibilityGroup];for(let s=Math.floor(e.aabr[0]/this._accBinsSizeX);s<=Math.floor(e.aabr[2]/this._accBinsSizeX);s++)if(!(s<0||s>=this._accBinsNumX))for(let i=Math.floor(e.aabr[1]/this._accBinsSizeY);i<=Math.floor(e.aabr[3]/this._accBinsSizeY);i++){if(i<0||i>=this._accBinsNumY)continue;const r=this._accBins[s][i];for(let i=0;i<r.length;i++){const s=r.data[i],n=s.info[this.visibilityGroup];if(n&&n.visible&&s.graphics3DGraphic.graphic.uid!==t&&(this.accNumTests++,v.intersects(n.aabr,e.aabr)))return!0}}return!1},a._initBins=function(i,t){if(null==this._accBins){this._accBins=[];for(let i=0;i<this._accBinsNumX;i++){this._accBins.push([]);const i=this._accBins[this._accBins.length-1];for(let t=0;t<this._accBinsNumY;t++)i.push(new n)}}else for(let e=0;e<this._accBinsNumX;e++)for(let i=0;i<this._accBinsNumY;i++)this._accBins[e][i].clear();this._accBinsSizeX=i/this._accBinsNumX,this._accBinsSizeY=t/this._accBinsNumY,this.accNumTests=0},a._addToBins=function(i){const t=i.info[this.visibilityGroup],e=Math.floor(t.aabr[0]/this._accBinsSizeX),s=Math.floor(t.aabr[2]/this._accBinsSizeX),r=Math.floor(t.aabr[1]/this._accBinsSizeY),n=Math.floor(t.aabr[3]/this._accBinsSizeY);for(let a=e;a<=s;a++)if(!(a<0||a>=this._accBinsNumX))for(let t=r;t<=n;t++)t<0||t>=this._accBinsNumY||this._accBins[a][t].push(i)},a._setGraphicVisibility=function(i,t){const e=i.graphics3DGraphic;e.destroyed||(e.setVisibilityFlag(this.visibilityGroup,w.VisibilityFlag.DECONFLICTION,t),this.visibilityGroup===w.VisibilityGroup.LABEL&&this.view.labeler.setLabelGraphicVisibility(e,t))},t._createClass(s,[{key:"dirty",get:function(){return this._dirty}},{key:"state",get:function(){return this._state}},{key:"updating",get:function(){return this._state!==i.State.Idle||this._dirty}},{key:"updatingProgress",get:function(){if(!this.updating)return 1;const t=this._state/i.State.NumStates;return this._dirty?.5*t:t}},{key:"running",get:function(){return this.view.ready&&null!=this.view.state&&this.updating}}]),s}(s),e.__decorate([a.property({constructOnly:!0})],i.Deconflictor.prototype,"view",void 0),e.__decorate([a.property({type:Boolean,readOnly:!0})],i.Deconflictor.prototype,"updating",null),i.Deconflictor=e.__decorate([h.subclass("esri.views.3d.layers.graphics.Deconflictor")],i.Deconflictor);let W=t._createClass((function(){this.id=0,this.visible=!1,this.prio=0,this.distance=0})),H=t._createClass((function(i=null,t=null,e=null){this.active=i,this.visible=t,this.sort=e,this.sortArray=new n({allocator:i=>i||new W})}));const Z=f.create();const q=new(function(){function i(){this.positionView=_.create(),this.positionNDC=_.create(),this.distance=0,this.distanceWithoutPolygonOffset=0,this.scaleInfo=new I.ScaleInfo}return t._createClass(i,[{key:"isOutsideScreen",get:function(){const i=this.positionNDC;return i[0]<-1||i[1]<-1||i[2]<-1||i[0]>=1||i[1]>=1}}]),i}());i.DeconflictorGraphic=X,i.DeconflictorViewState=L,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));