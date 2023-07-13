/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,t,r,o,s,n,c,p){"use strict";var u;let a=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-box",r}return e._inherits(r,t),r.prototype.clone=function(){return new u({maxLength:this.maxLength,minLength:this.minLength})},e._createClass(r)}(p);t.__decorate([r.property({type:["text-box"],json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=u=t.__decorate([c.subclass("esri.form.elements.inputs.TextBoxInput")],a);return a}));
