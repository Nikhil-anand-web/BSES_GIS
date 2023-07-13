/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../properties/defaultUnit","./AnalysisView3D","./interfaces","./AreaMeasurement/support/AreaMeasurementController","./AreaMeasurement/support/AreaMeasurementPathHelper","./AreaMeasurement/support/AreaMeasurementVisualization"],(function(e,t,r,a,o,s,i,n,l,p,u,y,c,d,_){"use strict";let h=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="area-measurement-view-3d",r.analysis=null,r.measurementData=null,r.lastDraggedVertex=null,r.cursorPoint=null,r.mode=y.MeasurementMode.Auto,r}e._inherits(r,t);var o=r.prototype;return o.initialize=function(){const{analysis:e,view:t}=this;this.path=new d.AreaMeasurement3DPathHelper({view:t,areaMeasurement:e}),this.analysisVisualization=new _.AreaMeasurementVisualization({view:t,analysis:e,analysisViewData:this}),this.analysisController=new c.AreaMeasurementController({view:t,analysis:e,analysisViewData:this})},o.destroy=function(){this.analysisController=a.destroyMaybe(this.analysisController),this.analysisVisualization=a.destroyMaybe(this.analysisVisualization),this.path.destroy()},e._createClass(r,[{key:"updating",get:function(){return!!this.analysisVisualization?.loadingMessages}},{key:"result",get:function(){const{measurementData:e}=this;return null==e?{area:null,mode:null,perimeter:null}:"euclidean"===e.actualMeasurementMode?{area:e.area,perimeter:e.perimeterLength,mode:"euclidean"}:{area:e.geodesicArea,perimeter:e.pathLength,mode:"geodesic"}}},{key:"viewData",get:function(){return this.analysisVisualization.viewData}},{key:"validMeasurement",get:function(){return this.path.isValidPolygon}},{key:"unit",get:function(){return this.analysis.unit??this._defaultUnit}},{key:"testData",get:function(){return{visualization:this.analysisVisualization,controller:this.analysisController}}}]),r}(u.AnalysisView3D(r));t.__decorate([o.property({readOnly:!0})],h.prototype,"type",void 0),t.__decorate([o.property({constructOnly:!0,nonNullable:!0})],h.prototype,"analysis",void 0),t.__decorate([o.property()],h.prototype,"updating",null),t.__decorate([o.property()],h.prototype,"analysisVisualization",void 0),t.__decorate([o.property()],h.prototype,"analysisController",void 0),t.__decorate([o.property()],h.prototype,"result",null),t.__decorate([o.property()],h.prototype,"measurementData",void 0),t.__decorate([o.property()],h.prototype,"viewData",null),t.__decorate([o.property()],h.prototype,"validMeasurement",null),t.__decorate([o.property()],h.prototype,"path",void 0),t.__decorate([o.property()],h.prototype,"lastDraggedVertex",void 0),t.__decorate([o.property()],h.prototype,"cursorPoint",void 0),t.__decorate([o.property()],h.prototype,"mode",void 0),t.__decorate([o.property()],h.prototype,"unit",null),t.__decorate([o.property(p.defaultUnitPropertyMetadata)],h.prototype,"_defaultUnit",void 0),h=t.__decorate([l.subclass("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],h);return h}));
