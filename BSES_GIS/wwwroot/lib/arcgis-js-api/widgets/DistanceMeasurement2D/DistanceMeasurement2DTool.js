/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../intl","../../symbols","../../core/analysisThemeUtils","../../core/maybe","../../core/reactiveUtils","../../core/unitFormatUtils","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/geometryEngine","../../geometry/projection","../../geometry/support/geodesicUtils","../../layers/GraphicsLayer","../../views/ViewingMode","../../views/draw/Draw","../../views/interactive/dragEventPipeline","../../views/interactive/GraphicManipulator","../../views/interactive/InteractiveToolBase","../../intl/messages","../../intl/locale","../../geometry/Point","../../symbols/CIMSymbol","../../symbols/TextSymbol","../../symbols/Font","../../symbols/SimpleMarkerSymbol","../../geometry/Polyline","../../geometry/SpatialReference"],(function(e,t,r,s,i,o,n,a,l,c,h,u,m,p,d,y,_,g,v,f,w,b,D,M,L,S,T,A,C,k,x,G,P,I,R){"use strict";const j=1e5;function E(e,t,r){const s=a.getAccentColor(.5),o={type:"simple-line",width:0},n=8,l=new P({style:"circle",color:s,size:n,outline:o}),c=new P({style:"circle",color:s,size:1.5*n,outline:o}),h=new i({geometry:e,symbol:l});return new L.GraphicManipulator({view:t,layer:r,graphic:h,focusedSymbol:c})}function U(e,t,r){const s=new I({paths:[e],spatialReference:t});let i,o;if(t.isGeographic)if(f.isSupported(t))i=f.geodesicLengths([s],"meters")[0],o=f.geodesicDensify(s,j);else{const e=v.project(s,R.WGS84),r=f.geodesicDensify(e,j);i=f.geodesicLengths([e],"meters")[0],o=v.project(r,t)}else if(t.isWebMercator)i=g.geodesicLength(s,"meters"),o=g.geodesicDensify(s,j,"meters");else{const e=g.planarLength(s,"meters");if(e>=r){const e=v.project(s,R.WGS84),r=f.geodesicDensify(e,j);i=f.geodesicLengths([e],"meters")[0],o=v.project(r,t)}else i=e,o=s}return{measurement:{geometry:o,length:i},original:s,drawing:o}}function B(e){return null!=e}function z(e){if(!e)return!1;const{isGeographic:t,isWebMercator:r,isWGS84:s}=e;return t&&!s&&!f.isSupported(e)||!t&&!r}function H(e,t,r){if(!t||!e)return"";switch(r){case"metric":return h.formatMetricLength(e,t.length,"meters");case"imperial":return h.formatImperialLength(e,t.length,"meters");default:return h.formatDecimal(e,u.convertUnit(t.length,"meters",r),r)}}e.DistanceMeasurement2DTool=function(e){function r(t){var r;return(r=e.call(this,t)||this)._drawActive=!1,r._measurementLayer=new w({internal:!0,listMode:"hide",visible:!1}),r._manipulatorLayer=new w({internal:!0,listMode:"hide",visible:!1}),r._vertices=[],r.geodesicDistanceThreshold=1e5,r.measurement=null,r.measurementLabel=null,r}t._inherits(r,e);var s=r.prototype;return s.initialize=function(){T.fetchMessageBundle("esri/core/t9n/Units").then((e=>{this.messages=e})),this.addHandles(A.onLocaleChange((async()=>{this.messages=await T.fetchMessageBundle("esri/core/t9n/Units")})));const e=this.view;this._draw=new D({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles(c.watch((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updatePolylines()}),c.initial))},s.destroy=function(){const{map:e}=this.view;this._draw.view=null,this._draw=l.destroyMaybe(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=l.destroyMaybe(this._measurementLayer),this._manipulatorLayer=l.destroyMaybe(this._manipulatorLayer),this._resetVertices()},s.onActivate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()},s.onShow=function(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0},s.onHide=function(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1},s.reset=function(){this._resetVertices(),this._measurementLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])},s._resetVertices=function(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]},s._startSketch=function(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>{this._stopSketch()}))},s._stopSketch=function(){this.manipulators.forEach((({manipulator:e})=>{e.interactive=!0})),this._drawActive=!1,this.finishToolCreation()},s._updateSketch=function(e){const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let a=this._vertices.length;a<e.length;a++){const[r,s]=e[a],i=E(new C({x:r,y:s,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(i);const o=M.createManipulatorDragEventPipeline(i,((e,t)=>{t.next(M.screenToMap(this.view)).next(M.dragGraphic(e.graphic,b.ViewingMode.Local)).next((()=>{const t=e.graphic.geometry;this._vertices[a].coord=[t.x,t.y],this._updatePolylines()}))}));this._vertices.push({manipulator:i,coord:[r,s],handle:o})}const r=this._vertices.length-1,s=this._vertices[r],[i,o]=e[r];s.coord[0]===i&&s.coord[1]===o||(s.coord=[i,o],s.manipulator.graphic.geometry=new C({x:i,y:o,spatialReference:t}));const n=this._drawActive?this._vertices[r].manipulator:null;this.manipulators.forEach((({manipulator:e})=>{e.interactive=null==n||e!==n})),this._updatePolylines()},s._updatePolylines=function(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=this._vertices.map((({coord:e})=>e)),{measurement:t,drawing:r,original:s}=U(e,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",t);const o=H(this.messages,t,this.unit);let n,l;this._set("measurementLabel",o);const{graphics:c}=this._measurementLayer;2===c.length?(n=c.at(0),l=c.at(1)):(n=new i({symbol:new k({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:a.getContrastColor().toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:a.getAccentColor().toArray()}]}}})}),l=new i({symbol:new x({color:a.getTextColor(),haloColor:a.getTextHaloColor(.5),haloSize:2,font:new G({size:14,family:"sans-serif"})})}),c.removeAll(),c.addMany([n,l])),n.geometry=r,l.geometry=s.extent?.center,l.symbol.text=o},t._createClass(r,[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(e){this._set("editable",e),e||this._draw.reset()}}]),r}(S.InteractiveToolBase),r.__decorate([m.property()],e.DistanceMeasurement2DTool.prototype,"_drawActive",void 0),r.__decorate([m.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"cursor",null),r.__decorate([m.property({value:!0})],e.DistanceMeasurement2DTool.prototype,"editable",null),r.__decorate([m.property({type:Number})],e.DistanceMeasurement2DTool.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([m.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"measurement",void 0),r.__decorate([m.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"measurementLabel",void 0),r.__decorate([m.property()],e.DistanceMeasurement2DTool.prototype,"messages",void 0),r.__decorate([m.property()],e.DistanceMeasurement2DTool.prototype,"unit",void 0),r.__decorate([m.property({constructOnly:!0})],e.DistanceMeasurement2DTool.prototype,"view",void 0),e.DistanceMeasurement2DTool=r.__decorate([_.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],e.DistanceMeasurement2DTool),e.createDistanceMeasurementInfo2D=U,e.createDistanceMeasurementLabel=H,e.isProjectionEngineRequired=z,e.isSupported=B,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
