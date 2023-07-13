/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./networkEnums"],(function(e,t,r,o,i,n,a,p,s,c,u,l,d){"use strict";let m=function(t){function r(e){var r;return(r=t.call(this,e)||this).attributeParameterValues=null,r.description=null,r.distanceAttributeName=null,r.id=null,r.impedanceAttributeName=null,r.name=null,r.restrictionAttributeNames=null,r.simplificationTolerance=null,r.simplificationToleranceUnits=null,r.timeAttributeName=null,r.type=null,r.useHierarchy=null,r.uturnAtJunctions=null,r}e._inherits(r,t);var o=r.prototype;return o.readId=function(e,t){return t.id??t.itemId??null},o.readRestrictionAttributes=function(e,t){const{restrictionAttributeNames:r}=t;return null==r?null:r.map((e=>d.restrictionAttributeNameJsonMap.fromJSON(e)))},o.writeRestrictionAttributes=function(e,t,r){null!=e&&(t[r]=e.map((e=>d.restrictionAttributeNameJsonMap.toJSON(e))))},e._createClass(r)}(r.ClonableMixin(o.JSONSupport));t.__decorate([i.property({type:[Object],json:{write:!0}})],m.prototype,"attributeParameterValues",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],m.prototype,"description",void 0),t.__decorate([s.enumeration(d.distanceImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],m.prototype,"distanceAttributeName",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],m.prototype,"id",void 0),t.__decorate([c.reader("id",["id","itemId"])],m.prototype,"readId",null),t.__decorate([s.enumeration(d.impedanceAttributeNameJsonMap,{ignoreUnknown:!1})],m.prototype,"impedanceAttributeName",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],m.prototype,"name",void 0),t.__decorate([i.property({type:[String],json:{write:!0}})],m.prototype,"restrictionAttributeNames",void 0),t.__decorate([c.reader("restrictionAttributeNames")],m.prototype,"readRestrictionAttributes",null),t.__decorate([l.writer("restrictionAttributeNames")],m.prototype,"writeRestrictionAttributes",null),t.__decorate([i.property({type:Number,json:{write:{allowNull:!0}}})],m.prototype,"simplificationTolerance",void 0),t.__decorate([s.enumeration(d.lengthUnitJsonMap)],m.prototype,"simplificationToleranceUnits",void 0),t.__decorate([s.enumeration(d.durationImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],m.prototype,"timeAttributeName",void 0),t.__decorate([s.enumeration(d.travelModeTypeJsonMap)],m.prototype,"type",void 0),t.__decorate([i.property({type:Boolean,json:{write:!0}})],m.prototype,"useHierarchy",void 0),t.__decorate([s.enumeration(d.restrictUTurnJsonMap)],m.prototype,"uturnAtJunctions",void 0),m=t.__decorate([u.subclass("esri.rest.support.TravelMode")],m);return m}));