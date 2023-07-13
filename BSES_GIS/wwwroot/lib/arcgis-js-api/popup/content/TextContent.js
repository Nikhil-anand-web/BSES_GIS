/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./Content"],(function(e,t,r,o,s,n,c,p){"use strict";var a;let u=a=function(t){function r(e){var r;return(r=t.call(this,e)||this).text=null,r.type="text",r}return e._inherits(r,t),r.prototype.clone=function(){return new a({text:this.text})},e._createClass(r)}(p);t.__decorate([r.property({type:String,json:{write:!0}})],u.prototype,"text",void 0),t.__decorate([r.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=a=t.__decorate([c.subclass("esri.popup.content.TextContent")],u);return u}));
