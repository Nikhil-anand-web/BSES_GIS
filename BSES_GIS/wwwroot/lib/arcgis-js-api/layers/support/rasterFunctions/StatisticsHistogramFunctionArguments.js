/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/reader","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer","./BaseFunctionArguments"],(function(t,s,r,e,o,a,i,c,n){"use strict";var u;let p=u=function(s){function e(){var t;return(t=s.apply(this,arguments)||this).statistics=null,t.histograms=null,t}t._inherits(e,s);var o=e.prototype;return o.readStatistics=function(t,s){if(!t?.length)return null;const r=[];return t.forEach((t=>{const s={min:t.min,max:t.max,avg:t.avg??t.mean,stddev:t.stddev??t.standardDeviation};r.push(s)})),r},o.writeStatistics=function(t,s,r){if(!t?.length)return;const e=[];t.forEach((t=>{const s={...t,mean:t.avg,standardDeviation:t.stddev};delete s.avg,delete s.stddev,e.push(s)})),s[r]=e},o.clone=function(){return new u({statistics:r.clone(this.statistics),histograms:r.clone(this.histograms)})},t._createClass(e)}(n);s.__decorate([e.property({json:{write:!0}})],p.prototype,"statistics",void 0),s.__decorate([a.reader("statistics")],p.prototype,"readStatistics",null),s.__decorate([c.writer("statistics")],p.prototype,"writeStatistics",null),s.__decorate([e.property({json:{write:!0}})],p.prototype,"histograms",void 0),p=u=s.__decorate([i.subclass("esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")],p);return p}));
