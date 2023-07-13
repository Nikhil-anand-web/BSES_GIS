/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./VisualVariable"],(function(e,t,r,o,s,i,n,a,p,l){"use strict";var c;let u=c=function(t){function o(e){var r;return(r=t.call(this,e)||this).axis=null,r.type="rotation",r.rotationType="geographic",r.valueExpressionTitle=null,r}e._inherits(o,t);var s=o.prototype;return s.writeValueExpressionTitleWebScene=function(e,t,o,s){if(s&&s.messages){const e=`visualVariables[${this.index}]`;s.messages.push(new r("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:s}))}},s.clone=function(){return new c({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})},e._createClass(o,[{key:"cache",get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}}]),o}(l);t.__decorate([o.property({readOnly:!0})],u.prototype,"cache",null),t.__decorate([o.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],u.prototype,"axis",void 0),t.__decorate([o.property({type:["rotation"],json:{type:["rotationInfo"]}})],u.prototype,"type",void 0),t.__decorate([o.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],u.prototype,"rotationType",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),t.__decorate([p.writer("web-scene","valueExpressionTitle")],u.prototype,"writeValueExpressionTitleWebScene",null),u=c=t.__decorate([a.subclass("esri.renderers.visualVariables.RotationVariable")],u);return u}));
