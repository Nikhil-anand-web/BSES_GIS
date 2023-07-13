/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./FeatureExpressionInfo","./unitConversionUtils"],(function(e,t,r,o,s,n,i,u,a,p,f,c,l,d){"use strict";var h;const y=r.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),x=new r.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let E=h=function(t){function r(e){var r;return(r=t.call(this,e)||this).offset=null,r}e._inherits(r,t);var o=r.prototype;return o.readFeatureExpressionInfo=function(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0},o.writeFeatureExpressionInfo=function(e,t,r,o){t[r]=e.write({},o),"0"===e.expression&&(t.featureExpression={value:0})},o.write=function(t,o){return this.offset||this.mode||this.featureExpressionInfo||this.unit?e._get(e._getPrototypeOf(r.prototype),"write",this).call(this,t,o):null},o.clone=function(){return new h({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},o.equals=function(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&s.equalsMaybe(this.featureExpressionInfo,e.featureExpressionInfo)},e._createClass(r,[{key:"mode",get:function(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)}},{key:"unit",set:function(e){this._set("unit",e)}}]),r}(o.JSONSupport);t.__decorate([n.property({type:l,json:{write:!0}})],E.prototype,"featureExpressionInfo",void 0),t.__decorate([p.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],E.prototype,"readFeatureExpressionInfo",null),t.__decorate([c.writer("featureExpressionInfo",{featureExpressionInfo:{type:l},"featureExpression.value":{type:[0]}})],E.prototype,"writeFeatureExpressionInfo",null),t.__decorate([n.property({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],E.prototype,"mode",null),t.__decorate([n.property({type:Number,json:{write:!0}})],E.prototype,"offset",void 0),t.__decorate([n.property({type:d.supportedUnits,json:{type:String,read:x.read,write:x.write}})],E.prototype,"unit",null),E=h=t.__decorate([f.subclass("esri.layers.support.ElevationInfo")],E);return E}));
