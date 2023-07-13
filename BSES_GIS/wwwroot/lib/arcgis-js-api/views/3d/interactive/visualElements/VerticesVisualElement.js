/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","./Object3DVisualElement","../../layers/graphics/ElevationContext","../../support/renderInfoUtils/point","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/Material","../../webgl-engine/materials/ShadedColorMaterial"],(function(e,t,r,i,n,a,l,s,o,c,u,h,d){"use strict";let _=function(e){function i(t){var r;return(r=e.call(this,t)||this).view=null,r._renderOccluded=h.RenderOccludedFlag.OccludeAndTransparent,r._vertices=null,r._spatialReference=null,r._color=a.fromArray([1,127/255,0,1]),r._size=11,r._outlineColor=a.fromArray([0,0,0,.5]),r._outlineSize=1,r._elevationInfo=null,r.applyProps(t),r}t._inherits(i,e);var l=i.prototype;return l._updateMaterial=function(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)},l._updateOutlineMaterial=function(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)},l._createRenderGeometries=function(){const e=this.vertices;if(null==e||0===e.length)return[];const t=.5,i=.5,n=o.geometryToRenderInfo(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,s.ElevationContext.fromElevationInfo(this.elevationInfo)),a=[],l=n.numVertices,c=n.position;for(let s=0;s<l;++s){const e=r.set(f,c[3*s],c[3*s+1],c[3*s+2]),n=v(this._vertexMaterial,t,e),l=v(this._vertexOutlineMaterial,i,e);a.push({vertexGeometry:n,vertexOutlineGeometry:l})}return a},l.createGeometries=function(e){const t=this._createRenderGeometries();for(const{vertexGeometry:r,vertexOutlineGeometry:i}of t)e.addGeometry(r),e.addGeometry(i)},l.createExternalResources=function(){this._vertexMaterial=new d.ShadedColorMaterial({...this._vertexMaterialParameters,writeDepth:!0,cullFace:c.CullFaceOptions.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new d.ShadedColorMaterial({...this._vertexOutlineMaterialParameters,transparent:!0,writeDepth:!0,cullFace:c.CullFaceOptions.Front,screenSizeEnabled:!0,shadingEnabled:!1})},l.destroyExternalResources=function(){this._vertexMaterial=null,this._vertexOutlineMaterial=null},l.forEachExternalMaterial=function(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)},t._createClass(i,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}},{key:"vertices",get:function(){return this._vertices},set:function(e){this._vertices=e,this.recreateGeometry()}},{key:"spatialReference",get:function(){return this._spatialReference},set:function(e){this._spatialReference=e,this.recreateGeometry()}},{key:"color",get:function(){return this._color},set:function(e){n.exactEquals(e,this._color)||(n.copy(this._color,e),this._updateMaterial())}},{key:"size",get:function(){return this._size},set:function(e){e!==this._size&&(this._size=e,this._updateMaterial())}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(e){n.exactEquals(e,this._outlineColor)||(n.copy(this._outlineColor,e),this._updateOutlineMaterial())}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(e){this._elevationInfo=e,this.recreateGeometry()}},{key:"_vertexMaterialParameters",get:function(){return{color:this._color,transparent:this._color[3]<1,screenSizeScale:this.size,renderOccluded:this._renderOccluded}}},{key:"_vertexOutlineMaterialParameters",get:function(){return{color:this._outlineColor,transparent:this._outlineColor[3]<1,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded}}}]),i}(l.Object3DVisualElement);const f=i.create();function v(e,t,r){return u.createSphereGeometry(e,t,16,16,{offset:r})}e.VerticesVisualElement=_,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));