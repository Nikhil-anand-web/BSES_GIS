/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/aaBoundingRect","./BrushVectorField","./RasterVFTile","../webgl/enums","../webgl/TileContainer"],(function(e,t,r,i,s,n,o){"use strict";let a=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).isCustomTilingScheme=!1,t.symbolTypes=["triangle"],t}t._inherits(o,e);var a=o.prototype;return a.createTile=function(e){const t=this._tileInfoView.getTileBounds(r.create(),e),[i,n]=this._tileInfoView.tileInfo.size,o=this._tileInfoView.getTileResolution(e.level);return new s.RasterVFTile(e,o,t[0],t[3],i,n)},a.prepareRenderPasses=function(e){const r=e.registerRenderPass({name:"imagery (vf tile)",brushes:[i],target:()=>this.children.map((e=>e.tileData)),drawPhase:n.WGLDrawPhase.MAP});return[...t._get(t._getPrototypeOf(o.prototype),"prepareRenderPasses",this).call(this,e),r]},a.doRender=function(e){this.visible&&e.drawPhase===n.WGLDrawPhase.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,t._get(t._getPrototypeOf(o.prototype),"doRender",this).call(this,e)}))},t._createClass(o)}(o);e.RasterVFTileContainer=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
