/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./interfaces","./TerrainConst","./terrainUtils","./tileUtils"],(function(e,t,i,s,l,n){"use strict";let a=function(){function e(){}var a=e.prototype;return a.init=function(e,t,i,s){this.tile=e,this._layerIdx=t,this._layerClass=i,this._suspended=s,this._tileLayerInfo=e.getLayerInfo(t,i),this._tileRequested=null;const l=this._findAncestorWithData();this._setUpsampleTile(l)},a.startLoading=function(){return this._requestNext()},a.dispose=function(){this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null),this.tile=null,this._tileLayerInfo=null},a.setSuspension=function(e){e!==this._suspended&&(this._suspended=e,e?this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null):this._tileLayerInfo.data||this.update())},a.update=function(){const e=this._findAncestorWithData();return this._setUpsampleTile(e),this._requestNext()},a.dataArrived=function(e,t){this._setUpsampleTile(e,t),this._tileRequested=null,e===this.tile?this.tile.updateRenderData(this._layerClass,i.TextureUpdate.FADING,t):this._requestNext()},a.dataMissing=function(){this._tileRequested=null,this._tileLayerInfo.data=null,this._requestNext()},a._agentDone=function(){this.tile.agentDone(this._layerIdx,this._layerClass),this.dispose()},a._requestNext=function(){if(this._suspended)return!0;const e=this._findNextDownload();if(this._tileRequested){if(e===this._tileRequested)return!0;this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null}return null!=e?e.requestLayerData(this._layerIdx,this._layerClass,this)&&(this._tileRequested=e):this._agentDone(),!!this._tileRequested},a._findNextDownload=function(){const e=this._layerIdx,t=this._layerClass,i=this.tile.surface.layerViewByIndex(e,t),a=l.getLayerWithExtentRange(i),{minLevel:r,maxLevel:u}=i.dataLevelRange,h=this._desiredMinLevelDelta,o=this._progressiveLevelModulo+h,d=this._scaleRangeEnabled?n.fallsWithinLayer:()=>!0;let _=this.tile;const f=_.level;let c;const y=this._tileLayerInfo.upsampleInfo,p=null!=y?y.tile.level:-1,L=null!=y&&p-f>=h,v=a?.tilemapCache,I="vector-tile-3d"===i.type?i.schemaHelper:null;for(;_&&d(_,a,!1)&&_.level>=r;){const i=_.level,l=f-i,n=_.layerInfo[t][e];if(n.data&&l>=h){(!L||i>p)&&this._setUpsampleTile(_),n.dataInvalidated&&(c=_);break}const a=I?.getLevelRowColumn(_.lij)??_.lij;if("unavailable"!==v?.getAvailability(a[0],a[1],_.lij[2])&&i<=u&&!n.data&&!n.dataMissing&&((!c||_.level===r||i%s.PROGRESSIVE_LOADING_MODULO==0||f-c.level<h)&&(c=_),l>=o))break;_=_.parent}if(null!=c&&f-c.level<h)if(y)c=null;else{const i=this._findAncestorWithData();if(null!=i){this._setUpsampleTile(i);c=i.layerInfo[t][e].dataInvalidated?i:null}}return c},a._findAncestorWithData=function(){const e=this.tile.elevationLevel,t=this._desiredMinLevelDelta;let i;for(let s=this.tile;s;s=s.parent)if(s.hasLayerData(this._layerIdx,this._layerClass)){if(e-s.level>=t)return s;i=s}return i},a._setUpsampleTile=function(e,t){this._tileLayerInfo.setUpsampleInfo(this.tile,e),this.tile.updateRenderData(this._layerClass,i.TextureUpdate.FADING,t)},t._createClass(e,[{key:"updating",get:function(){return!!this._tileRequested}},{key:"test",get:function(){return{findNextDownload:()=>this._findNextDownload(),tileLayerInfo:this._tileLayerInfo}}}]),e}(),r=function(e){function i(){return e.apply(this,arguments)||this}return t._inherits(i,e),i.prototype.dispose=function(){},t._createClass(i,[{key:"_desiredMinLevelDelta",get:function(){throw u}},{key:"_progressiveLevelModulo",get:function(){throw u}}]),i}(a);const u=new Error("Abstract method called on TileAgent"),h=new r;e.TILE_AGENT_DONE=h,e.TileAgent=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));