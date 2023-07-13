/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../../../../chunks/vec3f64","../../support/buffer/InterleavedLayout","../core/shaderLibrary/ShaderOutput","../lib/GLTextureMaterial","../lib/Material","../lib/RenderSlot","../lib/VertexAttribute","./VisualVariablePassParameters","../shaders/LineMarkerTechnique","../shaders/LineMarkerTechniqueConfiguration","../shaders/RibbonLineTechniqueConfiguration"],(function(e,t,r,a,i,s,n,u,o,c,h,l,p,d){"use strict";let A=function(e){function r(t){var r;return(r=e.call(this,t,new f)||this)._vertexAttributeLocations=l.vertexAttributeLocations,r._configuration=new p.LineMarkerTechniqueConfiguration,r._layout=r.createLayout(),r}t._inherits(r,e);var a=r.prototype;return a.dispose=function(){},a.getConfiguration=function(e,t){return this._configuration.output=e,this._configuration.space=t.slot===o.RenderSlot.DRAPED_MATERIAL?p.LineMarkerSpace.Draped:this.parameters.worldSpace?p.LineMarkerSpace.World:p.LineMarkerSpace.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==d.CapType.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===u.RenderOccludedFlag.OccludeAndTransparentStencil,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration},a.intersect=function(){},a.createLayout=function(){const e=i.newLayout().vec3f(c.VertexAttribute.POSITION).vec2f(c.VertexAttribute.UV0).vec3f(c.VertexAttribute.AUXPOS1);return this.parameters.worldSpace&&e.vec3f(c.VertexAttribute.NORMAL),this.parameters.vvSize?e.f32(c.VertexAttribute.SIZEFEATUREATTRIBUTE):e.f32(c.VertexAttribute.SIZE),this.parameters.vvColor?e.f32(c.VertexAttribute.COLORFEATUREATTRIBUTE):e.vec4f(c.VertexAttribute.COLOR),this.parameters.vvOpacity&&e.f32(c.VertexAttribute.OPACITYFEATUREATTRIBUTE),e},a.createBufferWriter=function(){return new T(this._layout,this.parameters)},a.requiresSlot=function(e,t){if(t===s.ShaderOutput.Color||t===s.ShaderOutput.Alpha||t===s.ShaderOutput.Highlight||t===s.ShaderOutput.Depth){if(e===o.RenderSlot.DRAPED_MATERIAL)return!0;if(this.parameters.renderOccluded===u.RenderOccludedFlag.OccludeAndTransparentStencil)return e===o.RenderSlot.OPAQUE_MATERIAL||e===o.RenderSlot.OCCLUDER_MATERIAL||e===o.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL;if(t===s.ShaderOutput.Color||t===s.ShaderOutput.Alpha){return e===(this.parameters.writeDepth?o.RenderSlot.TRANSPARENT_MATERIAL:o.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL)}return e===o.RenderSlot.OPAQUE_MATERIAL}return!1},a.createGLMaterial=function(e){return new m(e)},t._createClass(r)}(u.Material),m=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._markerPrimitive=null,t}t._inherits(r,e);var a=r.prototype;return a.dispose=function(){t._get(t._getPrototypeOf(r.prototype),"dispose",this).call(this),this._markerTextureRepository.release(this._markerPrimitive),this._markerPrimitive=null},a._updateParameters=function(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextureRepository.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(l.LineMarkerTechnique,e)},a._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})},a.beginSlot=function(e){return this._output!==s.ShaderOutput.Color&&this._output!==s.ShaderOutput.Alpha||this._updateOccludeeState(e),this._updateParameters(e)},t._createClass(r)}(n.GLTextureMaterial),f=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).width=0,t.color=[1,1,1,1],t.markerPrimitive="arrow",t.placement="end",t.cap=d.CapType.BUTT,t.anchor=p.LineMarkerAnchor.Center,t.hasTip=!1,t.worldSpace=!1,t.hideOnShortSegments=!1,t.writeDepth=!0,t.hasSlicePlane=!1,t.vvFastUpdate=!1,t.hasOccludees=!1,t.markerTexture=null,t}return t._inherits(r,e),t._createClass(r)}(h.VisualVariablePassParameters),T=function(){function e(e,t){this.vertexBufferLayout=e,this._parameters=t}var a=e.prototype;return a.elementCount=function(){return"begin-end"===this._parameters.placement?12:6},a.write=function(e,t,a,i,s){const n=a.vertexAttributes.get(c.VertexAttribute.POSITION).data,u=n.length/3;let o=[1,0,0];const h=a.vertexAttributes.get(c.VertexAttribute.NORMAL);this._parameters.worldSpace&&null!=h&&(o=h.data);let l=1,p=0;this._parameters.vvSize?p=a.vertexAttributes.get(c.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0]:a.vertexAttributes.has(c.VertexAttribute.SIZE)&&(l=a.vertexAttributes.get(c.VertexAttribute.SIZE).data[0]);let d=[1,1,1,1],A=0;this._parameters.vvColor?A=a.vertexAttributes.get(c.VertexAttribute.COLORFEATUREATTRIBUTE).data[0]:a.vertexAttributes.has(c.VertexAttribute.COLOR)&&(d=a.vertexAttributes.get(c.VertexAttribute.COLOR).data);let m=0;this._parameters.vvOpacity&&(m=a.vertexAttributes.get(c.VertexAttribute.OPACITYFEATUREATTRIBUTE).data[0]);const f=new Float32Array(i.buffer);let T=s*(this.vertexBufferLayout.stride/4);const S=(e,t,r,a)=>{if(f[T++]=e[0],f[T++]=e[1],f[T++]=e[2],f[T++]=r[0],f[T++]=r[1],f[T++]=t[0],f[T++]=t[1],f[T++]=t[2],this._parameters.worldSpace&&(f[T++]=o[0],f[T++]=o[1],f[T++]=o[2]),this._parameters.vvSize?f[T++]=p:f[T++]=l,this._parameters.vvColor)f[T++]=A;else{const e=Math.min(4*a,d.length-4);f[T++]=d[e],f[T++]=d[e+1],f[T++]=d[e+2],f[T++]=d[e+3]}this._parameters.vvOpacity&&(f[T++]=m)};let O;!function(e){e[e.ASCENDING=1]="ASCENDING",e[e.DESCENDING=-1]="DESCENDING"}(O||(O={}));const b=(t,a)=>{const i=r.set(_,n[3*t],n[3*t+1],n[3*t+2]),s=v;let o=t+a;do{r.set(s,n[3*o],n[3*o+1],n[3*o+2]),o+=a}while(r.equals(i,s)&&o>=0&&o<u);e&&(r.transformMat4(i,i,e),r.transformMat4(s,s,e)),S(i,s,[-1,-1],t),S(i,s,[1,-1],t),S(i,s,[1,1],t),S(i,s,[-1,-1],t),S(i,s,[1,1],t),S(i,s,[-1,1],t)},E=this._parameters.placement;"begin"!==E&&"begin-end"!==E||b(0,O.ASCENDING),"end"!==E&&"begin-end"!==E||b(u-1,O.DESCENDING)},t._createClass(e)}();const _=a.create(),v=a.create();e.LineMarkerMaterial=A,e.Parameters=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));