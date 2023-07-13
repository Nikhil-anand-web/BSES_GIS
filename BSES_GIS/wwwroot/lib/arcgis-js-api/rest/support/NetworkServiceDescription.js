/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./NetworkDataset","./networkEnums","./TravelMode"],(function(e,t,r,o,a,u,p,n,i,c,s,d,l,m){"use strict";let _=function(t){function r(e){var r;return(r=t.call(this,e)||this).accumulateAttributeNames=null,r.attributeParameterValues=null,r.currentVersion=null,r.defaultTravelMode=null,r.directionsLanguage=null,r.directionsLengthUnits=null,r.directionsSupportedLanguages=null,r.directionsTimeAttribute=null,r.hasZ=null,r.impedance=null,r.networkDataset=null,r.supportedTravelModes=null,r}e._inherits(r,t);var o=r.prototype;return o.readAccumulateAttributes=function(e){return null==e?null:e.map((e=>l.impedanceAttributeNameJsonMap.fromJSON(e)))},o.writeAccumulateAttributes=function(e,t,r){null!=e&&e.length&&(t[r]=e.map((e=>l.impedanceAttributeNameJsonMap.toJSON(e))))},o.readDefaultTravelMode=function(e,t){const r=t.supportedTravelModes?.find((({id:e})=>e===t.defaultTravelMode))??t.supportedTravelModes?.find((({itemId:e})=>e===t.defaultTravelMode));return r?m.fromJSON(r):null},e._createClass(r)}(r.JSONSupport);t.__decorate([o.property()],_.prototype,"accumulateAttributeNames",void 0),t.__decorate([i.reader("accumulateAttributeNames")],_.prototype,"readAccumulateAttributes",null),t.__decorate([s.writer("accumulateAttributeNames")],_.prototype,"writeAccumulateAttributes",null),t.__decorate([o.property()],_.prototype,"attributeParameterValues",void 0),t.__decorate([o.property()],_.prototype,"currentVersion",void 0),t.__decorate([o.property()],_.prototype,"defaultTravelMode",void 0),t.__decorate([i.reader("defaultTravelMode",["defaultTravelMode","supportedTravelModes"])],_.prototype,"readDefaultTravelMode",null),t.__decorate([o.property()],_.prototype,"directionsLanguage",void 0),t.__decorate([n.enumeration(l.directionsLengthUnitJsonMap)],_.prototype,"directionsLengthUnits",void 0),t.__decorate([o.property()],_.prototype,"directionsSupportedLanguages",void 0),t.__decorate([n.enumeration(l.durationImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],_.prototype,"directionsTimeAttribute",void 0),t.__decorate([o.property()],_.prototype,"hasZ",void 0),t.__decorate([n.enumeration(l.impedanceAttributeNameJsonMap,{ignoreUnknown:!1})],_.prototype,"impedance",void 0),t.__decorate([o.property({type:d})],_.prototype,"networkDataset",void 0),t.__decorate([o.property({type:[m]})],_.prototype,"supportedTravelModes",void 0),_=t.__decorate([c.subclass("esri.rest.support.NetworkServiceDescription")],_);return _}));
