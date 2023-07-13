/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/materials/DefaultTechniqueConfiguration"],(function(e,r,t,n,o){"use strict";var i;e.SimpleAtmosphereGeometry=void 0,(i=e.SimpleAtmosphereGeometry||(e.SimpleAtmosphereGeometry={}))[i.Cone=0]="Cone",i[i.Cylinder=1]="Cylinder",i[i.Underground=2]="Underground",i[i.COUNT=3]="COUNT";let u=function(t){function n(){var r;return(r=t.apply(this,arguments)||this).geometry=e.SimpleAtmosphereGeometry.Cone,r}return r._inherits(n,t),r._createClass(n)}(o.DefaultTechniqueConfiguration);t.__decorate([n.parameter({count:e.SimpleAtmosphereGeometry.COUNT})],u.prototype,"geometry",void 0),e.SimpleAtmosphereTechniqueConfiguration=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));