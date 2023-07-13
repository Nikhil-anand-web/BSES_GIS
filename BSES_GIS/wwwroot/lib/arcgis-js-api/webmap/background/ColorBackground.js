/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,o,e,c,t,s,n,p){"use strict";var u;let l=u=function(o){function c(r){var c;return(c=o.call(this,r)||this).color=new e([0,0,0,1]),c}return r._inherits(c,o),c.prototype.clone=function(){return new u(t.clone({color:this.color}))},r._createClass(c)}(c.JSONSupport);o.__decorate([s.property({type:e,json:{write:!0}})],l.prototype,"color",void 0),l=u=o.__decorate([p.subclass("esri.webmap.background.ColorBackground")],l);return l}));
