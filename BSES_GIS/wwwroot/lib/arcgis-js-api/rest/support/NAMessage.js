/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./GPMessage"],(function(e,r,s,t,o,c,a,p,n){"use strict";const i=new s.JSONMap({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let u=function(r){function s(e){var s;return(s=r.call(this,e)||this).type=null,s}return e._inherits(s,r),e._createClass(s)}(n);r.__decorate([t.property({type:String,json:{read:i.read,write:i.write}})],u.prototype,"type",void 0),u=r.__decorate([p.subclass("esri.rest.support.NAMessage")],u);return u}));
