/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec3f64","../shaderLibrary/ShaderOutput","../shaderLibrary/attributes/VertexNormal.glsl"],(function(e,r,t,a,i){"use strict";let n=function(e){function a(){var r;return(r=e.apply(this,arguments)||this).slicePlaneLocalOrigin=t.create(),r.origin=r.slicePlaneLocalOrigin,r.modelTransformation=null,r}return r._inherits(a,e),r._createClass(a)}(i.VertexNormalPassParameters),s=function(e){function t(){return e.apply(this,arguments)||this}return r._inherits(t,e),r._createClass(t)}(i.VertexNormalDrawParameters);var l;e.RenderPassIdentifier=void 0,(l=e.RenderPassIdentifier||(e.RenderPassIdentifier={}))[l.Material=0]="Material",l[l.ShadowMap=1]="ShadowMap",l[l.Highlight=2]="Highlight";let u=function(t){function i(){var r;return(r=t.apply(this,arguments)||this).identifier=e.RenderPassIdentifier.Material,r.output=a.ShaderOutput.Color,r.transparent=!1,r.integratedMesh=!1,r}return r._inherits(i,t),r._createClass(i)}(n),h=function(t){function a(){var r;return(r=t.apply(this,arguments)||this).identifier=e.RenderPassIdentifier.ShadowMap,r}return r._inherits(a,t),r._createClass(a)}(n),o=function(t){function a(){var r;return(r=t.apply(this,arguments)||this).identifier=e.RenderPassIdentifier.Highlight,r}return r._inherits(a,t),r._createClass(a)}(n);e.DrawParameters=s,e.HighlightPassParameters=o,e.MaterialPassParameters=u,e.PassParameters=n,e.ShadowMapPassParameters=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));