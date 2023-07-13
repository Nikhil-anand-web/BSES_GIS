/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/JSONSupport","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p,n){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).moment=null,t.success=!1,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.moment=e?e.getTime():null}}}})],u.prototype,"moment",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0}})],u.prototype,"success",void 0),u=r.__decorate([n.subclass("esri.rest.versionManagement.gdbVersion.support.PostResult")],u);return u}));
