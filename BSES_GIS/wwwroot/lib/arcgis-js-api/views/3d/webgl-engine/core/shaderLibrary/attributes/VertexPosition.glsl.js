/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/mat3f64","../../../../../../chunks/mat4f64","../../../../../../chunks/vec3f64","./PositionAttribute.glsl","../util/DoublePrecision.glsl","../../shaderModules/Float3DrawUniform","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix3DrawUniform","../../shaderModules/Matrix3PassUniform","../../shaderModules/Matrix4PassUniform"],(function(r,o,e,a,t,i,s,n,l,m,d,f,v){"use strict";function c(r,o){r.include(i.PositionAttribute);const e=r.vertex;e.include(s.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new l.Float3PassUniform("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new l.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new f.Matrix3PassUniform("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new v.Matrix4PassUniform("transformProjFromView",(r=>r.transformProjFromView)),new d.Matrix3DrawUniform("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new n.Float3DrawUniform("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new n.Float3DrawUniform("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(m.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(m.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?m.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:m.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new l.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(m.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(m.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let F=function(r){function i(){var o;return(o=r.apply(this,arguments)||this).transformWorldFromViewTH=t.create(),o.transformWorldFromViewTL=t.create(),o.transformViewFromCameraRelativeRS=e.create(),o.transformProjFromView=a.create(),o}return o._inherits(i,r),o._createClass(i)}(m.NoParameters),P=function(r){function a(){var o;return(o=r.apply(this,arguments)||this).transformWorldFromModelRS=e.create(),o.transformWorldFromModelTH=t.create(),o.transformWorldFromModelTL=t.create(),o}return o._inherits(a,r),o._createClass(a)}(m.NoParameters);r.VertexPosition=c,r.VertexPositionDrawParameters=P,r.VertexPositionPassParameters=F,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
