/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/JSONSupport","../../core/Loadable","../../core/Logger","../../core/Promise","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,i,l,a,n,p,u,c){"use strict";let d=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).fieldName=null,e.modelName=null,e.label=null,e.min=null,e.max=null,e.mostFrequentValues=null,e.subLayerIds=null,e}return e._inherits(t,r),e._createClass(t)}(o.JSONSupport);r.__decorate([a.property({type:String})],d.prototype,"fieldName",void 0),r.__decorate([a.property({type:String})],d.prototype,"modelName",void 0),r.__decorate([a.property({type:String})],d.prototype,"label",void 0),r.__decorate([a.property({type:Number})],d.prototype,"min",void 0),r.__decorate([a.property({type:Number})],d.prototype,"max",void 0),r.__decorate([a.property({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),r.__decorate([a.property({type:[Number]})],d.prototype,"subLayerIds",void 0),d=r.__decorate([c.subclass("esri.layers.support.BuildingFieldStatistics")],d);let y=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).url=null,e}e._inherits(o,r);var s=o.prototype;return s.load=function(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)},s._fetchService=async function(e){const r=(await t(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})},e._createClass(o,[{key:"fields",get:function(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(i.getLogger(this).error("building summary statistics are not loaded"),null)}}]),o}(s.LoadableMixin(l.EsriPromiseMixin(o.JSONSupport)));r.__decorate([a.property({constructOnly:!0,type:String})],y.prototype,"url",void 0),r.__decorate([a.property({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],y.prototype,"fields",null),y=r.__decorate([c.subclass("esri.layers.support.BuildingSummaryStatistics")],y);return y}));