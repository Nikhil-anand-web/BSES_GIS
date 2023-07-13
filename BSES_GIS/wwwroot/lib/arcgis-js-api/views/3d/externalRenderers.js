/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/deprecate","../../core/Logger","../../chunks/mat4f64","../../geometry/projection","./externalRenderers/ExternalRendererStore"],(function(e,r,n,t,o,i){"use strict";const s=new i;function d(e,r){s.add(e,r)}function a(e,r){s.remove(e,r)}function c(e){e._stage.renderView.requestRender()}function u(e,r,n,t,i,s,d){return t=t||e.spatialReference,o.projectBuffer(r,t,n,i,e.renderCoordsHelper.spatialReference,s,d)?i:null}function f(e,r,n,t,i,s,d){return s=s||e.spatialReference,o.projectBuffer(r,e.renderCoordsHelper.spatialReference,n,t,s,i,d)?t:null}function l(e,r,n,i){return i||(i=t.create()),n=n||e.spatialReference,o.computeTranslationToOriginAndRotation(n,r,i,e.renderCoordsHelper.spatialReference)?i:null}function p(e){return e.state.camera.clone()}function R(e){return{add:d.bind(this,e),remove:a.bind(this,e),requestRender:c.bind(this,e),toRenderCoordinates:u.bind(this,e),fromRenderCoordinates:f.bind(this,e),renderCoordinateTransformAt:l.bind(this,e)}}function m(e){const t=n.getLogger("esri/views/3d/externalRenderers");r.deprecatedFunction(t,"forceWebGLContext",{moduleName:"esri/views/3d/externalRenderers",version:"4.27",see:"https://developers.arcgis.com/javascript/latest/system-requirements/"}),2!==e&&t.warn(`Requested context version '${e}' is not supported! Using a WebGL2 context.`)}e.add=d,e.bind=R,e.forceWebGLContext=m,e.fromRenderCoordinates=f,e.getRenderCamera=p,e.remove=a,e.renderCoordinateTransformAt=l,e.requestRender=c,e.toRenderCoordinates=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
