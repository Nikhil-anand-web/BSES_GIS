/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../rasterFunctionConstants","./BaseFunctionArguments","./convolutionUtils"],(function(e,o,t,r,n,s,c,i,u){"use strict";var p;let l=p=function(o){function r(){var e;return(e=o.apply(this,arguments)||this).rows=3,e.cols=3,e.kernel=[0,0,0,0,1,0,0,0,0],e}return e._inherits(r,o),r.prototype.clone=function(){return new p({cols:this.cols,rows:this.rows,kernel:[...this.kernel],convolutionType:this.convolutionType,raster:t.clone(this.raster)})},e._createClass(r,[{key:"convolutionType",set:function(e){this._set("convolutionType",e);const o=u.convolutionKernels.get(e);if(!o||e===c.convolutionKernel.userDefined||e===c.convolutionKernel.none)return;const t=Math.sqrt(o.length);this._set("kernel",o),this._set("cols",t),this._set("rows",t)}}]),r}(i);o.__decorate([r.property({json:{type:Number,write:!0}})],l.prototype,"rows",void 0),o.__decorate([r.property({json:{type:Number,write:!0}})],l.prototype,"cols",void 0),o.__decorate([r.property({json:{name:"type",type:Number,write:!0}})],l.prototype,"convolutionType",null),o.__decorate([r.property({json:{type:[Number],write:!0}})],l.prototype,"kernel",void 0),l=p=o.__decorate([s.subclass("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")],l);return l}));
