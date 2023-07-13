/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,p,n,c){"use strict";var i;let a=i=function(t){function r(e){return t.call(this,e)||this}return e._inherits(r,t),r.prototype.clone=function(){return new i({name:this.name,path:this.path,title:this.title})},e._createClass(r)}(r.JSONSupport);t.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"name",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"path",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"title",void 0),a=i=t.__decorate([c.subclass("esri.webscene.TransportationNetwork")],a);return a}));
