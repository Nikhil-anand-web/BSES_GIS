/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4f64","../../../../geometry/support/buffer/BufferView","../../support/buffer/InterleavedLayout","../core/shaderLibrary/ShaderOutput","../lib/basicInterfaces","../lib/GLMaterial","../lib/OrderIndependentTransparency","../lib/RenderSlot","../lib/Util","../lib/VertexAttribute","./DefaultBufferWriter","./PatternStyle","./TriangleMaterial","./VisualVariablePassParameters","./internal/bufferWriterUtils","../shaders/PatternTechnique"],(function(t,e,r,i,a,n,s,u,o,l,c,h,f,p,d,g,_,A){"use strict";let b=function(t){function r(e){var r;return(r=t.call(this,e,new m)||this).supportsEdges=!0,r._vertexAttributeLocations=A.vertexAttributeLocations,r._configuration=new A.PatternTechniqueConfiguration,r}e._inherits(r,t);var i=r.prototype;return i.getConfiguration=function(t,e){return this._configuration.output=t,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.style=this.parameters.style,this._configuration.patternSpacing=this.parameters.patternSpacing,this._configuration.lineWidth=this.parameters.lineWidth,this._configuration.draped=this.parameters.draped,this._configuration.transparencyPassType=e.transparencyPassType,this._configuration.enableOffset=e.camera.relativeElevation<o.OITPolygonOffsetLimit,this._configuration.hasMultipassTerrain=e.multipassTerrain.enabled,this._configuration.cullAboveGround=e.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration},i.requiresSlot=function(t,e){if(e===n.ShaderOutput.Color||e===n.ShaderOutput.Alpha||e===n.ShaderOutput.Highlight||e===n.ShaderOutput.Depth&&this.parameters.writeLinearDepth){if(t===l.RenderSlot.DRAPED_MATERIAL)return!0;if(e===n.ShaderOutput.Highlight)return t===l.RenderSlot.OPAQUE_MATERIAL;return t===(this.parameters.writeDepth?l.RenderSlot.TRANSPARENT_MATERIAL:l.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL)}return!1},i.createGLMaterial=function(t){return new S(t)},i.createBufferWriter=function(){const t=a.newLayout().vec3f(h.VertexAttribute.POSITION).vec4f(h.VertexAttribute.UVMAPSPACE);return this.parameters.draped||t.mat3f(h.VertexAttribute.BOUNDINGRECT),this.parameters.vvColor?t.f32(h.VertexAttribute.COLORFEATUREATTRIBUTE):t.vec4u8(h.VertexAttribute.COLOR),new O(t)},e._createClass(r)}(d.TriangleMaterial),S=function(t){function r(){return t.apply(this,arguments)||this}e._inherits(r,t);var i=r.prototype;return i._updateParameters=function(t){return this.ensureTechnique(A.PatternTechnique,t)},i._updateOccludeeState=function(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})},i.beginSlot=function(t){return this._output!==n.ShaderOutput.Color&&this._output!==n.ShaderOutput.Alpha||this._updateOccludeeState(t),this._updateParameters(t)},e._createClass(r)}(u),O=function(t){function r(){return t.apply(this,arguments)||this}e._inherits(r,t);var a=r.prototype;return a.write=function(t,e,r,a,n){for(const s of this.vertexBufferLayout.fields.keys()){const u=r.vertexAttributes.get(s),o=r.indices.get(s);if(u&&o)switch(s){case h.VertexAttribute.UVMAPSPACE:{c.assert(4===u.size);const t=a.getField(s,i.BufferViewVec4f);t&&_.writeBufferVec4(o,u.data,t,n);break}case h.VertexAttribute.BOUNDINGRECT:{c.assert(9===u.size);const e=a.getField(s,i.BufferViewMat3f);e&&this.writeBoundingRect(o,u.data,t,e,n);break}default:_.writeDefaultAttribute(s,u,o,t,e,a,n)}}},a.writeBoundingRect=function(t,e,r,i,a){const n=r,s=i.typedBuffer,u=i.typedBufferStride,o=t.length;a*=u;for(let l=0;l<o;++l){const r=9*t[l],i=e[r],o=e[r+1],c=e[r+2];s[a]=n[0]*i+n[4]*o+n[8]*c+n[12],s[a+1]=n[1]*i+n[5]*o+n[9]*c+n[13],s[a+2]=n[2]*i+n[6]*o+n[10]*c+n[14];for(let t=3;t<9;++t)s[a+t]=e[r+t];a+=u}},e._createClass(r)}(f.DefaultBufferWriter),m=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).color=r.fromValues(1,1,1,1),e.writeDepth=!0,e.writeLinearDepth=!1,e.hasVertexColors=!1,e.polygonOffset=!1,e.hasSlicePlane=!1,e.cullFace=s.CullFaceOptions.None,e.hasOccludees=!1,e.style=p.Style.Cross,e.patternSpacing=10,e.lineWidth=1,e.draped=!0,e}return e._inherits(i,t),e._createClass(i)}(g.VisualVariablePassParameters);t.Parameters=m,t.PatternMaterial=b,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
