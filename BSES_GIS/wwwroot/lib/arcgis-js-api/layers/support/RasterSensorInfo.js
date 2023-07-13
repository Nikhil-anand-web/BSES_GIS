/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer"],(function(e,o,r,t,i,s,n,a,u,c){"use strict";var p;function d(e){return e=Number(e),isNaN(e)?void 0:e}let l=p=function(o){function r(){var e;return(e=o.apply(this,arguments)||this).acquisitionDate=void 0,e.cloudCover=void 0,e.productName=void 0,e.sensorName=null,e.sensorAzimuth=void 0,e.sensorElevation=void 0,e.sunAzimuth=void 0,e.sunElevation=void 0,e}e._inherits(r,o);var t=r.prototype;return t.readAcquisitionDate=function(e){return new Date(e)},t.writeAcquisitionDate=function(e,o){o.AcquisitionDate=e.getTime()},t.clone=function(){return new p({acquisitionDate:this.acquisitionDate,cloudCover:this.cloudCover,productName:this.productName,sensorName:this.sensorName,sensorAzimuth:this.sensorAzimuth,sensorElevation:this.sensorElevation,sunAzimuth:this.sunAzimuth,sunElevation:this.sunElevation})},e._createClass(r)}(r.JSONSupport);o.__decorate([t.property({json:{name:"AcquisitionDate",write:!0}})],l.prototype,"acquisitionDate",void 0),o.__decorate([a.reader("acquisitionDate")],l.prototype,"readAcquisitionDate",null),o.__decorate([c.writer("acquisitionDate")],l.prototype,"writeAcquisitionDate",null),o.__decorate([t.property({json:{name:"CloudCover",read:{reader:d},write:!0}})],l.prototype,"cloudCover",void 0),o.__decorate([t.property({json:{name:"ProductName",write:!0}})],l.prototype,"productName",void 0),o.__decorate([t.property({json:{name:"SensorName",write:!0}})],l.prototype,"sensorName",void 0),o.__decorate([t.property({json:{name:"SensorAzimuth",read:{reader:d},write:!0}})],l.prototype,"sensorAzimuth",void 0),o.__decorate([t.property({json:{name:"SensorElevation",read:{reader:d},write:!0}})],l.prototype,"sensorElevation",void 0),o.__decorate([t.property({json:{name:"SunAzimuth",read:{reader:d},write:!0}})],l.prototype,"sunAzimuth",void 0),o.__decorate([t.property({json:{name:"SunElevation",read:{reader:d},write:!0}})],l.prototype,"sunElevation",void 0),l=p=o.__decorate([u.subclass("esri.layers.support.RasterSensorInfo")],l);return l}));
