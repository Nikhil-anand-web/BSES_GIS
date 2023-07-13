/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./BaseFunctionArguments","./pixelUtils"],(function(t,e,r,n,o,a,s,i,l){"use strict";var u;let p=u=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).includedRanges=null,t.noDataValues=null,t.noDataInterpretation=l.NoDataInterpretation.matchAny,t}return t._inherits(r,e),r.prototype.clone=function(){return new u({includedRanges:this.includedRanges?.slice()??[],noDataValues:this.noDataValues?.slice()??[],noDataInterpretation:this.noDataInterpretation})},t._createClass(r,[{key:"normalizedNoDataValues",get:function(){const{noDataValues:t}=this;if(!t?.length)return null;let e=!1;const r=t.map((t=>{if("number"==typeof t)return e=!0,[t];if("string"==typeof t){const r=t.trim().split(" ").filter((t=>""!==t.trim())).map((t=>Number(t)));return e=e||r.length>0,0===r.length?null:r}return null}));return e?r:null}}]),r}(i);e.__decorate([r.property({json:{write:!0}})],p.prototype,"includedRanges",void 0),e.__decorate([r.property({json:{write:!0}})],p.prototype,"noDataValues",void 0),e.__decorate([r.property()],p.prototype,"normalizedNoDataValues",null),e.__decorate([r.property({json:{write:!0}})],p.prototype,"noDataInterpretation",void 0),p=u=e.__decorate([s.subclass("esri.layers.support.rasterFunctions.MaskFunctionArguments")],p);return p}));
