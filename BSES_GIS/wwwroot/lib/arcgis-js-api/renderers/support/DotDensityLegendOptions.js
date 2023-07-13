/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,n,c,p){"use strict";var u;let i=u=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).unit=null,r}return r._inherits(t,e),t.prototype.clone=function(){return new u({unit:this.unit})},r._createClass(t)}(t.JSONSupport);e.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"unit",void 0),i=u=e.__decorate([p.subclass("esri.renderers.support.DotDensityLegendOptions")],i);return i}));
