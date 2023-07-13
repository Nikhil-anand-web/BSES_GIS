/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,s,o,c,a,i){"use strict";const n=e=>{let o=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).customParameters=null,r}return r._inherits(t,e),r._createClass(t)}(e);return t.__decorate([s.property({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],o.prototype,"customParameters",void 0),o=t.__decorate([i.subclass("esri.layers.mixins.CustomParametersMixin")],o),o};e.CustomParametersMixin=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
