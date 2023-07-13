/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../support/LegendOptions"],(function(e,r,s,t,o,n,i,p){"use strict";var c;let a=c=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).showLegend=null,e}return e._inherits(s,r),s.prototype.clone=function(){return new c({title:this.title,showLegend:this.showLegend})},e._createClass(s)}(p.LegendOptions);r.__decorate([s.property({type:Boolean,json:{write:!0}})],a.prototype,"showLegend",void 0),a=c=r.__decorate([i.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],a);return a}));
