/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../renderers/ClassBreaksRenderer","../../renderers/DictionaryRenderer","../../renderers/DotDensityRenderer","../../renderers/HeatmapRenderer","../../renderers/PieChartRenderer","../../renderers/Renderer","../../renderers/SimpleRenderer","../../renderers/UniqueValueRenderer","../../renderers/support/jsonUtils","../../renderers/support/types","../../symbols","../../core/JSONSupport","../../core/lang","../../core/object","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./AggregateField","./commonProperties","./featureLayerUtils","./LabelClass"],(function(e,r,t,o,n,s,p,l,i,a,d,u,c,y,b,f,_,m,S,g,w,h,I,v,R,x,j){"use strict";var P;const T="esri.layers.support.FeatureReductionCluster";function z(e){return"simple"===e.type&&!e.visualVariables?.length}let M=P=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="cluster",t.clusterRadius=m.toPt("80px"),t.clusterMinSize=m.toPt("12px"),t.clusterMaxSize=m.toPt("50px"),t.maxScale=0,t.popupEnabled=!0,t.popupTemplate=null,t.renderer=null,t.symbol=null,t.labelingInfo=null,t.labelsVisible=!0,t.fields=null,t}e._inherits(t,r);var o=t.prototype;return o.readRenderer=function(e,r,t){const o=r.drawingInfo?.renderer;return o?.authoringInfo?.isAutoGenerated?null:o?z(o)?null:u.read(o,r,t)??void 0:x.createDefaultRenderer(r,t)},o.readSymbol=function(e,r,t){const o=r.drawingInfo?.renderer;if(o?.authoringInfo?.isAutoGenerated)return null;if(o&&z(o)){const e=u.read(o,r,t);return e?.symbol}return null},o.writeSymbol=function(e,r,t,o){const n=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||n){const t=new a({symbol:e});r.drawingInfo={renderer:t.write({},o)}}},o.writeFields=function(e,r,t){const o=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));_.setDeepValue(t,o,r)},o.readFields=function(e,r,t){return e.filter((e=>!e.isAutoGenerated)).map((e=>v.fromJSON(e)))},o.clone=function(){return new P({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:f.clone(this.labelingInfo),labelsVisible:this.labelsVisible,fields:f.clone(this.fields),maxScale:this.maxScale,renderer:f.clone(this.renderer),symbol:f.clone(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:f.clone(this.popupTemplate)})},e._createClass(t)}(b.JSONSupport);r.__decorate([S.property({type:["cluster"],readOnly:!0,json:{write:!0}})],M.prototype,"type",void 0),r.__decorate([S.property({type:Number,cast:e=>"auto"===e?e:m.toPt(e),json:{write:!0}})],M.prototype,"clusterRadius",void 0),r.__decorate([S.property({type:Number,cast:m.toPt,json:{write:!0}})],M.prototype,"clusterMinSize",void 0),r.__decorate([S.property({type:Number,cast:m.toPt,json:{write:!0}})],M.prototype,"clusterMaxSize",void 0),r.__decorate([S.property({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],M.prototype,"maxScale",void 0),r.__decorate([S.property(R.popupEnabled)],M.prototype,"popupEnabled",void 0),r.__decorate([S.property({type:t,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],M.prototype,"popupTemplate",void 0),r.__decorate([S.property({types:c.rendererTypes,json:{write:{target:"drawingInfo.renderer"}}})],M.prototype,"renderer",void 0),r.__decorate([w.reader("renderer",["drawingInfo.renderer"])],M.prototype,"readRenderer",null),r.__decorate([S.property({types:y.symbolTypesCluster})],M.prototype,"symbol",void 0),r.__decorate([w.reader("symbol",["drawingInfo.renderer"])],M.prototype,"readSymbol",null),r.__decorate([I.writer("symbol")],M.prototype,"writeSymbol",null),r.__decorate([S.property({type:[j],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],M.prototype,"labelingInfo",void 0),r.__decorate([S.property(R.labelsVisible)],M.prototype,"labelsVisible",void 0),r.__decorate([S.property({type:[v],json:{write:!0}})],M.prototype,"fields",void 0),r.__decorate([I.writer("fields")],M.prototype,"writeFields",null),r.__decorate([w.reader("fields")],M.prototype,"readFields",null),M=P=r.__decorate([h.subclass(T)],M);return M}));
