/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/common","../../../../chunks/mat3","../../../../chunks/mat3f32","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","./VertexStream","./shaders/StencilPrograms","../../../webgl/enums","../../../webgl/ProgramTemplate"],(function(t,e,i,n,s,r,a,o,c,l,h,d,u){"use strict";const p=a.fromValues(-.5,-.5);let _=function(){function t(){this._centerNdc=c.create(),this._pxToNdc=c.create(),this._worldDimensionsPx=c.create(),this._mat3=r.create(),this._initialized=!1}var a=t.prototype;return a.dispose=function(){this._program=i.disposeMaybe(this._program),this._quad=i.disposeMaybe(this._quad)},a.render=function(t,e){const{context:i}=t;return!!this._updateGeometry(t,e)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(d.StencilOperation.KEEP,d.StencilOperation.KEEP,d.StencilOperation.REPLACE),i.setStencilFunction(d.CompareFunction.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)},a._initialize=function(t){if(this._initialized)return;const e=u.createProgram(t,h.stencil);e&&(this._program=e,this._quad=new l(t,[0,0,1,0,0,1,1,1]),this._initialized=!0)},a._updateGeometry=function(t,e){const{state:i,pixelRatio:r}=t,{size:a,rotation:c}=i,l=Math.round(a[0]*r),h=Math.round(a[1]*r);if(!i.spatialReference.isWrappable)return!1;const d=n.toRadian(c),u=Math.abs(Math.cos(d)),_=Math.abs(Math.sin(d)),m=Math.round(l*u+h*_),f=Math.round(i.worldScreenWidth);if(m<=f)return!1;const b=l*_+h*u,g=f*r,x=(e.left-e.right)*r/l,M=(e.bottom-e.top)*r/h;o.set(this._worldDimensionsPx,g,b,1),o.set(this._pxToNdc,2/l,-2/h,1),o.set(this._centerNdc,x,M,1);const E=this._mat3;return s.fromTranslation(E,this._centerNdc),s.scale(E,E,this._pxToNdc),0!==c&&s.rotate(E,E,d),s.scale(E,E,this._worldDimensionsPx),s.translate(E,E,p),!0},e._createClass(t)}();t.WorldExtentClipRenderer=_,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));