/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../support/buffer/InterleavedLayout","../core/shaderLibrary/ShaderOutput","../lib/GLMaterial","../lib/Material","../lib/RenderSlot","../lib/VertexAttribute","../shaders/MeasurementArrowTechnique"],(function(e,t,r,n,i,o,s,a,u,c,l,f){"use strict";let p=function(e){function r(t){var r;return(r=e.call(this,t,new A)||this)._configuration=new f.MeasurementArrowTechniqueConfiguration,r}t._inherits(r,e);var n=r.prototype;return n.getConfiguration=function(e,t){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration},n.dispose=function(){},n.intersect=function(){},n.requiresSlot=function(e,t){if(t===s.ShaderOutput.Color||t===s.ShaderOutput.Alpha){return e===(this._transparent?c.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:c.RenderSlot.OPAQUE_MATERIAL)}return!1},n.createGLMaterial=function(e){return new h(e)},n.createBufferWriter=function(){return new M},t._createClass(r,[{key:"_transparent",get:function(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}]),r}(u.Material),h=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),r.prototype.beginSlot=function(e){return this.ensureTechnique(f.MeasurementArrowTechnique,e)},t._createClass(r)}(a),A=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).width=32,t.outlineSize=.2,t.outlineColor=i.fromValues(1,.5,0,1),t.stripeEvenColor=i.fromValues(1,1,1,1),t.stripeOddColor=i.fromValues(1,.5,0,1),t.stripeLength=1,t.polygonOffset=!1,t}return t._inherits(r,e),t._createClass(r)}(u.MaterialParameters);const d=o.newLayout().vec3f(l.VertexAttribute.POSITION).vec3f(l.VertexAttribute.NORMAL).vec2f(l.VertexAttribute.UV0).f32(l.VertexAttribute.AUXPOS1),g=n.create(),b=n.create(),m=n.create(),O=n.create(),_=n.create();let M=function(){function e(){this.vertexBufferLayout=d}var n=e.prototype;return n.elementCount=function(e){return 2*(e.indices.get(l.VertexAttribute.POSITION).length/2+1)},n.write=function(e,t,n,i,o){const s=n.vertexAttributes.get(l.VertexAttribute.POSITION).data,a=n.vertexAttributes.get(l.VertexAttribute.NORMAL).data,u=s.length/3,c=n&&n.indices&&n.indices.get(l.VertexAttribute.POSITION);c&&c.length!==2*(u-1)&&console.warn("MeasurementArrowMaterial does not support indices");const f=g,p=b,h=m,A=O,d=_,M=i.position,y=i.normal,v=i.uv0;let S=0;for(let l=0;l<u;++l){const n=3*l;if(r.set(f,s[n],s[n+1],s[n+2]),l<u-1){const e=3*(l+1);r.set(p,s[e],s[e+1],s[e+2]),r.set(d,a[e],a[e+1],a[e+2]),r.normalize(d,d),r.subtract(h,p,f),r.normalize(h,h),r.cross(A,d,h),r.normalize(A,A)}const i=r.distance(f,p);e&&t&&(r.transformMat4(f,f,e),r.transformMat4(p,p,e),r.transformMat4(A,A,t));const c=o+2*l,g=c+1;M.setVec(c,f),M.setVec(g,f),y.setVec(c,A),y.setVec(g,A),v.set(c,0,S),v.set(c,1,-1),v.set(g,0,S),v.set(g,1,1),l<u-1&&(S+=i)}const T=i.auxpos1;for(let r=0;r<2*u;++r)T.set(o+r,S)},t._createClass(e)}();e.MeasurementArrowMaterial=p,e.Parameters=A,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
