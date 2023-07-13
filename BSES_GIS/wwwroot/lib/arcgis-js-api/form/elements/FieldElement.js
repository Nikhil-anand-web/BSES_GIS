/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/deprecate","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./Element","./support/inputs","../../layers/support/domains"],(function(e,t,r,i,o,s,p,n,a,l,d,c){"use strict";var u;const y="esri.form.elements.FieldElement",_=i.getLogger(y);let h=u=function(t){function i(e){var r;return(r=t.call(this,e)||this).domain=null,r.editableExpression=null,r.fieldName=null,r.hint=null,r.input=null,r.requiredExpression=null,r.type="field",r.valueExpression=null,r}return e._inherits(i,t),i.prototype.clone=function(){return new u({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})},e._createClass(i,[{key:"editable",get:function(){return r.deprecatedProperty(_,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._get("editable")??!0},set:function(e){r.deprecatedProperty(_,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._set("editable",e)}}]),i}(l);t.__decorate([o.property({types:c.types,json:{read:{reader:c.fromJSON},write:!0}})],h.prototype,"domain",void 0),t.__decorate([o.property({type:Boolean,json:{write:!0}})],h.prototype,"editable",null),t.__decorate([o.property({type:String,json:{write:!0}})],h.prototype,"editableExpression",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],h.prototype,"fieldName",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],h.prototype,"hint",void 0),t.__decorate([o.property({types:d.types,json:{read:{source:"inputType"},write:{target:"inputType"}}})],h.prototype,"input",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],h.prototype,"requiredExpression",void 0),t.__decorate([o.property({type:String,json:{read:!1,write:!0}})],h.prototype,"type",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],h.prototype,"valueExpression",void 0),h=u=t.__decorate([a.subclass(y)],h);return h}));