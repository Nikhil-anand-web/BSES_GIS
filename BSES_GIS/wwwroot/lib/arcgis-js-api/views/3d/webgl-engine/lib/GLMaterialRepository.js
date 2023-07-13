/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Logger","../../../../core/maybe","../../../../core/NestedMap","./Util"],(function(e,t,r,i,n,o){"use strict";let s=function(){function e(e,t,r,i){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new n.NestedMap}var o=e.prototype;return o.dispose=function(){this._textureRepository.destroy()},o.acquire=function(e,t,r){if(this._ownMaterial(e),!e.requiresSlot(t,r))return null;let i=this._id2glMaterialRef.get(r,e.id);if(null==i){const t=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:r});i=new a(t),this._id2glMaterialRef.set(r,e.id,i)}return i.ref(),i.glMaterial},o.release=function(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||(i.disposeMaybe(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))},o._ownMaterial=function(e){null!=e.repository&&e.repository!==this&&r.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this},t._createClass(e)}(),a=function(){function e(e){this.glMaterial=e,this._refCnt=0}var r=e.prototype;return r.ref=function(){++this._refCnt},r.unref=function(){--this._refCnt,o.assert(this._refCnt>=0)},t._createClass(e,[{key:"referenced",get:function(){return this._refCnt>0}}]),e}();e.GLMaterialRepository=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
