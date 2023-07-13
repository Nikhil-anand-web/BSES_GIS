/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","../tiling/PagedTileQueue","../tiling/TileInfoView","../tiling/TileKey","../tiling/TileQueue","../tiling/TileStrategy","./LayerView2D","./support/Display","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,i,s,n,o,r,l,a,c,u,h,p,d,f,y,g,w){"use strict";const _=new Set,v=[],C=[];let T=e._createClass((function(e,t,i,s,n,o,r,a=[0,0],c=l.create()){this.id=e,this.level=t,this.row=i,this.col=s,this.world=n,this.resolution=o,this.scale=r,this.coords=a,this.bounds=c})),R=function(t){function i(e){var i;return(i=t.call(this,e)||this)._tileMap=new Map,i.layer=null,i.tiles=[],i}e._inherits(i,t);var s=i.prototype;return s.initialize=function(){this.display=new y.Display(this),this.container.addChild(this.display)},s.attach=function(){},s.detach=function(){},s.requestRender=function(){this.display.requestRender()},s.tilesChanged=function(e,t){},s.supportsSpatialReference=function(e){const t=this.layer?.tileInfo;return!t||a.equals(t.spatialReference,e)},s.doRefresh=async function(){},s.isUpdating=function(){return!1},s.update=function(e){const t=this._tileInfoView,i=this.tiles;if(t){const s=t.getTileCoverage(e.state,0),{spans:n,lodInfo:o}=s??{};if(n&&n.length&&o)for(const{row:e,colFrom:t,colTo:r}of n)for(let s=t;s<=r;s++){const t=o.normalizeCol(s),n=o.getWorldForColumn(s),r=`${o.level}/${e}/${t}/${n}`;if(!this._tileMap.has(r)){const s=new T(r,o.level,e,t,n,o.resolution,o.scale);o.getTileCoords(s.coords,s,!1),o.getTileBounds(s.bounds,s,!0),this._tileMap.set(r,s),i.push(s),v.push(s)}_.add(r)}}for(let s=i.length-1;s>=0;s--){const e=i[s];_.has(e.id)||(i.splice(s,1),C.push(e),this._tileMap.delete(e.id))}(v.length||C.length)&&(this.tilesChanged(v,C),v.length=C.length=0),_.clear(),this.requestRender()},s.moveStart=function(){},s.viewChange=function(){this.requestUpdate()},s.moveEnd=function(){},e._createClass(i,[{key:"_tileInfoView",get:function(){const e=this.layer&&this.layer.tileInfo;return e?new u(e):null}}]),i}(w(f.LayerView2DMixin(g)));t.__decorate([i.property()],R.prototype,"_tileInfoView",null),t.__decorate([i.property()],R.prototype,"layer",void 0),R=t.__decorate([r.subclass("esri.views.2d.layers.BaseLayerView2D")],R);return R}));
