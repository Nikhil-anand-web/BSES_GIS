/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,n,p,i,c){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).expression=null,t.returnType="string",t.title=null,t}return e._inherits(t,r),e._createClass(t)}(t.ClonableMixin(o.JSONSupport));r.__decorate([s.property({type:String,json:{write:{isRequired:!0}}})],u.prototype,"expression",void 0),r.__decorate([s.property({type:["number","string"],json:{write:!0}})],u.prototype,"returnType",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"title",void 0),u=r.__decorate([c.subclass("esri.webdoc.geotriggersInfo.ExpressionInfo")],u);return u}));
