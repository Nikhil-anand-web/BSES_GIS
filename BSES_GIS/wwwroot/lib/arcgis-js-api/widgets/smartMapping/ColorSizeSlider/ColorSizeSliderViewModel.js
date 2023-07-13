/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/Error","../../../core/accessorSupport/decorators/subclass","../SizeSlider/SizeSliderViewModel"],(function(e,r,o,s,t,i,c,l,n){"use strict";let u=function(r){function o(e){return r.call(this,e)||this}return e._inherits(o,r),o.prototype.getStopInfo=function(){const{min:e,max:r,stops:o}=this;return o&&o.length?o.map((o=>({color:o.color,offset:(r-o.value)/(r-e)}))):[]},e._createClass(o)}(n);u=r.__decorate([l.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],u);return u}));
