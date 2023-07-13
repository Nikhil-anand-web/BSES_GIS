/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/compilerUtils","../../../../../../chunks/mat3f64","../../../../../../chunks/vec4f64","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix3DrawUniform","../../shaderModules/Matrix3PassUniform"],(function(r,e,a,o,l,t,s,i,m,n){"use strict";function d(r,e){switch(e.normalType){case t.NormalType.Attribute:case t.NormalType.Compressed:r.include(t.NormalAttribute,e),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add(new m.Matrix3DrawUniform("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new n.Matrix3PassUniform("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),r.vertex.code.add(i.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case t.NormalType.Ground:r.include(s.VertexPosition,e),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(i.glsl`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?i.glsl`normalize(vPositionWorldCameraRelative);`:i.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case t.NormalType.ScreenDerivative:r.vertex.code.add(i.glsl`void forwardNormal() {}`);break;default:a.neverReached(e.normalType);case t.NormalType.COUNT:}}let c=function(r){function a(){var e;return(e=r.apply(this,arguments)||this).transformNormalViewFromGlobal=o.create(),e}return e._inherits(a,r),e._createClass(a)}(s.VertexPositionPassParameters),v=function(r){function a(){var e;return(e=r.apply(this,arguments)||this).transformNormalGlobalFromModel=o.create(),e.toMapSpace=l.create(),e}return e._inherits(a,r),e._createClass(a)}(s.VertexPositionDrawParameters);r.VertexNormal=d,r.VertexNormalDrawParameters=v,r.VertexNormalPassParameters=c,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
