/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderLibrary/ShaderOutput","../lib/GLMaterial","./WaterTechnique"],(function(e,t,a,r,s){"use strict";let i=function(e){function r(){return e.apply(this,arguments)||this}t._inherits(r,e);var i=r.prototype;return i._updateShadowState=function(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})},i._updateSSRState=function(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})},i._updateCloudsReflectionState=function(e){const t=null!=e.cloudsFade.data;t!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:t})},i.ensureResources=function(e){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e)},i.beginSlot=function(e){return this._output===a.ShaderOutput.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters),this.ensureTechnique(s.WaterTechnique,e)},t._createClass(r)}(r);e.WaterGLMaterial=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
