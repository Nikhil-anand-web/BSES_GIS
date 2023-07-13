/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","./CloudsData","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,t,r,a,n,i){"use strict";var o;e.RayMarchingSteps=void 0,(o=e.RayMarchingSteps||(e.RayMarchingSteps={}))[o.SIXTEEN=0]="SIXTEEN",o[o.HUNDRED=1]="HUNDRED",o[o.TWOHUNDRED=2]="TWOHUNDRED",o[o.COUNT=3]="COUNT";let s=function(r){function a(){var t;return(t=r.apply(this,arguments)||this).steps=e.RayMarchingSteps.SIXTEEN,t.writeTextureChannels=n.CloudsTextureChannels.RG,t}return t._inherits(a,r),t._createClass(a)}(i.ShaderTechniqueConfiguration);r.__decorate([i.parameter({count:e.RayMarchingSteps.COUNT})],s.prototype,"steps",void 0),r.__decorate([i.parameter({constValue:a("esri-mobile")?1024:2048})],s.prototype,"cubeMapSize",void 0),r.__decorate([i.parameter()],s.prototype,"writeTextureChannels",void 0),e.CloudsTechniqueConfiguration=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
