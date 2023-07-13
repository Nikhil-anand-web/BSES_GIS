/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,i,t,n){"use strict";var r;e.PrecipitationType=void 0,(r=e.PrecipitationType||(e.PrecipitationType={}))[r.Rain=0]="Rain",r[r.Snow=1]="Snow",r[r.COUNT=2]="COUNT";let o=function(t){function n(){var i;return(i=t.apply(this,arguments)||this).type=e.PrecipitationType.Rain,i}return i._inherits(n,t),i._createClass(n)}(n.ShaderTechniqueConfiguration);t.__decorate([n.parameter({count:e.PrecipitationType.COUNT})],o.prototype,"type",void 0),e.PrecipitationTechniqueConfiguration=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
