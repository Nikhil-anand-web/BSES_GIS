/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/reactiveUtils","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../properties/defaultUnit","./AreaMeasurement2DTool","../support/InteractiveToolViewModel"],(function(e,t,i,r,n,o,s,a,l,u,c,d,p){"use strict";let h=function(t){function n(e){var i;return(i=t.call(this,e)||this).supportedViewType="2d",i.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views.",i.geodesicDistanceThreshold=1e5,i}e._inherits(n,t);var o=n.prototype;return o.initialize=function(){this.addHandles([i.watch((()=>this.view?.spatialReference),(()=>this.clear())),i.watch((()=>this.unit),(e=>{null!=this.tool&&(this.tool.unit=e)}),i.initial),i.watch((()=>this.geodesicDistanceThreshold),(e=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=e)}),i.initial)])},o.start=async function(){const e=this.view;null!=e&&(await i.whenOnce((()=>e.ready)),d.isProjectionEngineRequired(e.spatialReference)&&await u.load()),this.createTool({interactive:!0})},o.clear=function(){this.removeTool()},o.constructTool=function(){return new d.AreaMeasurement2DTool({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})},o._validateUnit=function(e){const{unitOptions:t,defaultUnit:i}=this;return null!=e&&t.includes(e)?e:t.includes(i)?i:t.length>0?t[0]:i},o._validateUnits=function(e){if(null==e)return[];const t=e.filter((e=>r.measurementAreaUnits.includes(e)));return 0===t.length?r.measurementAreaUnits.slice():t},e._createClass(n,[{key:"measurement",get:function(){return null!=this.tool?this.tool.measurement:null}},{key:"measurementLabel",get:function(){return null!=this.tool?this.tool.measurementLabel:null}},{key:"state",get:function(){return this.disabled||null==this.view||!d.isSupported(this.view.spatialReference)?"disabled":null!=this.tool&&this.tool.measurement?this.tool.active?"measuring":"measured":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){this._overrideIfSome("unit",this._validateUnit(e))}},{key:"unitOptions",get:function(){return r.measurementAreaUnits},set:function(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}}]),n}(p.InteractiveToolViewModel);t.__decorate([n.property(c.defaultUnitPropertyMetadata)],h.prototype,"defaultUnit",void 0),t.__decorate([n.property({type:Number})],h.prototype,"geodesicDistanceThreshold",void 0),t.__decorate([n.property({readOnly:!0})],h.prototype,"measurement",null),t.__decorate([n.property({readOnly:!0})],h.prototype,"measurementLabel",null),t.__decorate([n.property({readOnly:!0})],h.prototype,"state",null),t.__decorate([n.property({type:String})],h.prototype,"unit",null),t.__decorate([n.property({type:[String]})],h.prototype,"unitOptions",null),h=t.__decorate([l.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],h);return h}));
