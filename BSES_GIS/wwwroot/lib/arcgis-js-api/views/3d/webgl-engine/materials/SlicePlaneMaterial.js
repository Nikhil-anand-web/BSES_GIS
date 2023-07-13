/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/GLMaterial","../lib/Material","../lib/RenderSlot","./DefaultBufferWriter","./DefaultLayouts","./TriangleMaterial","../shaders/SlicePlaneMaterialTechnique"],(function(e,r,t,n,i,a,u,l,o,c,s){"use strict";let f=function(e){function i(r){var t;return(t=e.call(this,r,new d)||this)._configuration=new n.ShaderTechniqueConfiguration,t}r._inherits(i,e);var a=i.prototype;return a.createBufferWriter=function(){return new l.DefaultBufferWriter(o.PositionUVLayout)},a.requiresSlot=function(e,r){return r===t.ShaderOutput.Color&&e===u.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL},a.createGLMaterial=function(e){return new h(e)},a.getConfiguration=function(){return this._configuration},r._createClass(i)}(c.TriangleMaterial),h=function(e){function t(r){var t;return(t=e.call(this,r)||this).ensureTechnique(s.SlicePlaneMaterialTechnique,null),t}return r._inherits(t,e),t.prototype.beginSlot=function(){return this.technique},r._createClass(t)}(i),d=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).renderOccluded=a.RenderOccludedFlag.Occlude,r}return r._inherits(t,e),r._createClass(t)}(s.SlicePlaneMaterialPassParameters);e.Parameters=d,e.SlicePlaneMaterial=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));