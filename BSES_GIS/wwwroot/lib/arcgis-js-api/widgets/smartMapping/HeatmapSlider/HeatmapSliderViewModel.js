/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../intl","../../../core/Handles","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../SmartMappingSliderViewModel","../../../intl/locale","../../../intl/messages"],(function(e,t,r,o,a,s,n,l,i,p,c,d){"use strict";let u=function(t){function r(e){var r;return(r=t.call(this,e)||this)._handles=new o,r.hasTimeData=!1,r.labelFormatFunction=(e,t)=>"min"===t?r.messages.bottomLabel:"max"===t?r.messages.topLabel:e.toString(),r.max=1,r.messages=null,r.min=0,r.zoomingEnabled=!1,r}e._inherits(r,t);var a=r.prototype;return a.initialize=function(){const e=async()=>this.messages=await d.fetchMessageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider");e(),this._handles.add(c.onLocaleChange(e))},a.getStopInfo=function(){const{stops:e}=this;return e&&e.length?e.map((e=>({color:e.color,offset:1-e.ratio}))):[]},e._createClass(r,[{key:"state",get:function(){const{messages:e,max:t,min:r}=this;return e&&null!=t&&null!=r?"ready":"disabled"}},{key:"values",get:function(){const{stops:e}=this;return!e||!e.length||e.length<2?[]:[e[0].ratio,e[e.length-1].ratio]}}]),r}(p);t.__decorate([a.property({readOnly:!0})],u.prototype,"hasTimeData",void 0),t.__decorate([a.property({readOnly:!0})],u.prototype,"labelFormatFunction",void 0),t.__decorate([a.property({readOnly:!0})],u.prototype,"max",void 0),t.__decorate([a.property()],u.prototype,"messages",void 0),t.__decorate([a.property({readOnly:!0})],u.prototype,"min",void 0),t.__decorate([a.property({readOnly:!0})],u.prototype,"state",null),t.__decorate([a.property({readOnly:!0})],u.prototype,"values",null),t.__decorate([a.property({readOnly:!0})],u.prototype,"zoomingEnabled",void 0),u=t.__decorate([i.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],u);return u}));