/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,c,i,n,p){"use strict";const a=e=>{let c=function(e){function r(...o){var r;return(r=e.call(this,...o)||this).goToOverride=null,r.view=null,r}return o._inherits(r,e),r.prototype.callGoTo=function(e){const{view:o}=this;return t.assertIsSome(o),this.goToOverride?this.goToOverride(o,e):o.goTo(e.target,e.options)},o._createClass(r)}(e);return r.__decorate([s.property()],c.prototype,"goToOverride",void 0),r.__decorate([s.property()],c.prototype,"view",void 0),c=r.__decorate([p.subclass("esri.widgets.support.GoTo")],c),c};e.GoToMixin=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
