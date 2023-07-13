/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./domains","./fieldType"],(function(e,t,r,o,a,n,i,p,l,s,d,c,u){"use strict";var y;const _=new r.JSONMap({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=y=function(t){function r(e){var r;return(r=t.call(this,e)||this).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r.visible=!0,r}e._inherits(r,t);var o=r.prototype;return o.readDescription=function(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(o){}return r?.value??null},o.readValueType=function(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(o){}return r?_.fromJSON(r.fieldValueType):null},o.clone=function(){return new y({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})},e._createClass(r)}(o.JSONSupport);t.__decorate([a.property({type:String,json:{write:!0}})],m.prototype,"alias",void 0),t.__decorate([a.property({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),t.__decorate([a.property()],m.prototype,"description",void 0),t.__decorate([s.reader("description")],m.prototype,"readDescription",null),t.__decorate([a.property({types:c.types,json:{read:{reader:c.fromJSON},write:!0}})],m.prototype,"domain",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),t.__decorate([a.property({type:n.Integer,json:{write:!0}})],m.prototype,"length",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],m.prototype,"name",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),t.__decorate([l.enumeration(u.kebabDict)],m.prototype,"type",void 0),t.__decorate([a.property()],m.prototype,"valueType",void 0),t.__decorate([s.reader("valueType",["description"])],m.prototype,"readValueType",null),t.__decorate([a.property({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=y=t.__decorate([d.subclass("esri.layers.support.Field")],m);return m}));