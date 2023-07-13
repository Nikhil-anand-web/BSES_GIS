/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/object","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer"],(function(e,t,r,o,n,p,s,l,i,u,a,c){"use strict";var d;let m=d=function(t){function n(e){var r;return(r=t.call(this,e)||this).currentTimeExtent=null,r.fullTimeExtent=null,r.loop=!1,r.numStops=null,r.numThumbs=null,r.stopDelay=null,r.stopInterval=null,r.stops=null,r}e._inherits(n,t);var l=n.prototype;return l.readCurrentTimeExtent=function(e){if(!e)return;const t=null!=e[0]?new Date(e[0]):null,o=null!=e[1]?new Date(e[1]):null;return new r({start:t,end:o})},l.writeCurrentTimeExtent=function(e,t,r){e&&s.setDeepValue(r,[null!=e.start?e.start.getTime():null,null!=e.end?e.end.getTime():null],t)},l.readFullTimeExtent=function(e,t){const o=t.properties;if(!o)return;const n=null!=o.endTime?new Date(o.endTime):null,p=null!=o.startTime?new Date(o.startTime):null;return new r({start:p,end:n})},l.writeFullTimeExtent=function(e,t){if(!e)return;const r=t.properties=t.properties||{},o=e.end,n=e.start;o&&(r.endTime=null!=o?o.getTime():null),n&&(r.startTime=null!=n?n.getTime():null)},l.readStopInterval=function(e,t,r){return e?o.fromJSON({value:e.interval,unit:e.units},r):null},l.writeStopInterval=function(e,t,r,o){if(!e)return;const n=e.toJSON(o);s.setDeepValue(r,{interval:n.value,units:n.unit},t)},l.readStops=function(e){return e&&e.length?e.map((e=>new Date(e))):null},l.writeStops=function(e,t,r){e&&e.length&&s.setDeepValue(r,e.map((e=>e.getTime())),t)},l.clone=function(){return new d(p.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))},e._createClass(n)}(n.JSONSupport);t.__decorate([l.property({type:r,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],m.prototype,"currentTimeExtent",void 0),t.__decorate([u.reader("currentTimeExtent")],m.prototype,"readCurrentTimeExtent",null),t.__decorate([c.writer("currentTimeExtent")],m.prototype,"writeCurrentTimeExtent",null),t.__decorate([l.property({type:r,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],m.prototype,"fullTimeExtent",void 0),t.__decorate([u.reader("fullTimeExtent")],m.prototype,"readFullTimeExtent",null),t.__decorate([c.writer("fullTimeExtent")],m.prototype,"writeFullTimeExtent",null),t.__decorate([l.property({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],m.prototype,"loop",void 0),t.__decorate([l.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){const e=!!this.stopInterval,t=!!this.stops?.length,r=!(e||t);return{enabled:r,isRequired:r}}}}})],m.prototype,"numStops",void 0),t.__decorate([l.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],m.prototype,"numThumbs",void 0),t.__decorate([l.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],m.prototype,"stopDelay",void 0),t.__decorate([l.property({type:o,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){const e=null!=this.numStops,t=!!this.stops?.length;return{enabled:!t,isRequired:!(e||t)}}}}})],m.prototype,"stopInterval",void 0),t.__decorate([u.reader("stopInterval")],m.prototype,"readStopInterval",null),t.__decorate([c.writer("stopInterval")],m.prototype,"writeStopInterval",null),t.__decorate([l.property({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],m.prototype,"stops",void 0),t.__decorate([u.reader("stops")],m.prototype,"readStops",null),t.__decorate([c.writer("stops")],m.prototype,"writeStops",null),m=d=t.__decorate([a.subclass("esri.webdoc.widgets.TimeSlider")],m);return m}));
