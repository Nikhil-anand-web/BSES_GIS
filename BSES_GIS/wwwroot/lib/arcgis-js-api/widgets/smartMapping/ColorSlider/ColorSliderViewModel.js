/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/Error","../../../core/accessorSupport/decorators/subclass","../SmartMappingPrimaryHandleSliderViewModel"],(function(r,e,o,s,t,c,i,l,n){"use strict";let a=function(e){function o(r){return e.call(this,r)||this}return r._inherits(o,e),o.prototype.getStopInfo=function(){const{min:r,max:e,stops:o}=this;return o&&o.length?o.map((o=>({color:o.color,offset:(e-o.value)/(e-r)}))):[]},r._createClass(o)}(n);a=e.__decorate([l.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],a);return a}));
