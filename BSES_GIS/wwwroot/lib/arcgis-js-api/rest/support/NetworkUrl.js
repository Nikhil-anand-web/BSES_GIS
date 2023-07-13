/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,n,l,p){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).doNotLocateOnRestrictedElements=null,t.url=null,t}return e._inherits(t,r),e._createClass(t)}(t.ClonableMixin(o.JSONSupport));r.__decorate([s.property({type:Boolean,json:{write:!0}})],u.prototype,"doNotLocateOnRestrictedElements",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=r.__decorate([p.subclass("esri.rest.support.NetworkUrl")],u);return u}));
