/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../intl","../../symbols","../../core/analysisThemeUtils","../../core/maybe","../../core/reactiveUtils","../../core/unitFormatUtils","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/geometryEngine","../../geometry/projection","../../geometry/support/geodesicUtils","../../layers/GraphicsLayer","../../views/ViewingMode","../../views/draw/Draw","../../views/interactive/dragEventPipeline","../../views/interactive/GraphicManipulator","../../views/interactive/InteractiveToolBase","../../intl/messages","../../intl/locale","../../geometry/Point","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../symbols/TextSymbol","../../symbols/Font","../../symbols/SimpleMarkerSymbol","../../geometry/Polyline","../../geometry/SpatialReference","../../geometry/Polygon"],(function(e,t,r,s,i,a,o,n,l,c,m,u,p,h,d,y,f,g,_,v,w,b,A,L,M,D,S,T,G,k,q,j,x,U,C,R,P){"use strict";const W=1e5;function E(e,t,r){const s=8,a={style:"circle",color:n.getAccentColor(.5),outline:{type:"simple-line",width:0}},o=new U({...a,size:s}),l=new U({...a,size:1.5*s}),c=new i({geometry:e,symbol:o});return new M.GraphicManipulator({view:t,layer:r,graphic:c,focusedSymbol:l})}function z(e,t,r){if(2===e.length){const s=new C({paths:e,spatialReference:t});let i;if(t?.isGeographic)if(v.isSupported(t))i=v.geodesicDensify(s,W);else{const e=_.project(s,R.WGS84),r=v.geodesicDensify(e,W);i=_.project(r,t)}else if(t?.isWebMercator)i=g.geodesicDensify(s,W,"meters");else{if(g.planarLength(s,"meters")>=r){const e=_.project(s,R.WGS84),r=v.geodesicDensify(e,W);i=_.project(r,t)}else i=s}return{measurement:null,fillGeometry:null,outlineGeometry:i}}e.push(e[0]);const s=new C({paths:[e],spatialReference:t}),i=new P({rings:[e],spatialReference:t});let a,o,n=null,l=null;if(t?.isGeographic)if(v.isSupported(t)){if(n=v.geodesicDensify(s,W),l=v.geodesicDensify(i,W),l=g.simplify(l),!l)return null;a=v.geodesicLengths([s],"meters")[0],o=v.geodesicAreas([l],"square-meters")[0]}else{const e=R.WGS84,r=_.project(s,e),c=_.project(i,e);if(n=v.geodesicDensify(r,W),l=v.geodesicDensify(c,W),l=g.simplify(l),!l)return null;a=v.geodesicLengths([r],"meters")[0],o=v.geodesicAreas([l],"square-meters")[0],n=_.project(n,t),l=_.project(l,t)}else if(t?.isWebMercator){if(n=g.geodesicDensify(s,W,"meters"),l=g.geodesicDensify(i,W,"meters"),l=g.simplify(l),!l)return null;a=g.geodesicLength(s,"meters"),o=g.geodesicArea(l,"square-meters")}else{const e=g.planarLength(s,"meters");if(e>=r){const e=R.WGS84,r=_.project(s,e),c=_.project(i,e);if(n=v.geodesicDensify(r,W),l=v.geodesicDensify(c,W),l=g.simplify(l),!l)return null;a=v.geodesicLengths([r],"meters")[0],o=v.geodesicAreas([l],"square-meters")[0],n=_.project(n,t),l=_.project(l,t)}else{if(n=s,l=g.simplify(i),!l)return null;a=e,o=g.planarArea(l,"square-meters")}}return{measurement:{geometry:l,area:o,perimeter:a},fillGeometry:l,outlineGeometry:n}}function B(e){return null!=e}function H(e){if(!e)return!1;const{isGeographic:t,isWebMercator:r,isWGS84:s}=e;return t&&!s&&!v.isSupported(e)||!t&&!r}function I(e,t,r){if(!t||!e)return null;const s={area:null,perimeter:null},{area:i,perimeter:a}=t;switch(r){case"metric":s.area=m.formatMetricArea(e,i,"square-meters");break;case"imperial":s.area=m.formatImperialArea(e,i,"square-meters");break;default:{const t=u.convertUnit(i,"square-meters",r);s.area=m.formatDecimal(e,t,r);break}}const o=O(r);if(o)switch(o){case"metric":s.perimeter=m.formatMetricLength(e,a,"meters");break;case"imperial":s.perimeter=m.formatImperialLength(e,a,"meters");break;default:{const t=u.convertUnit(a,"meters",o);s.perimeter=m.formatDecimal(e,t,o);break}}else s.perimeter="";return s}function O(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}e.AreaMeasurement2DTool=function(e){function r(t){var r;return(r=e.call(this,t)||this)._drawActive=!1,r._measurementLayer=new w({internal:!0,listMode:"hide",visible:!1}),r._manipulatorLayer=new w({internal:!0,listMode:"hide",visible:!1}),r._vertices=[],r.geodesicDistanceThreshold=1e5,r.measurement=null,r.measurementLabel=null,r}t._inherits(r,e);var s=r.prototype;return s.initialize=function(){S.fetchMessageBundle("esri/core/t9n/Units").then((e=>{this.messages=e})),this.addHandles(T.onLocaleChange((async()=>{this.messages=await S.fetchMessageBundle("esri/core/t9n/Units")})));const e=this.view;this._draw=new A({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles(c.watch((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updateGraphics()}),c.initial))},s.destroy=function(){const{map:e}=this.view;this._draw.view=null,this._draw=l.destroyMaybe(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=l.destroyMaybe(this._measurementLayer),this._manipulatorLayer=l.destroyMaybe(this._manipulatorLayer),this._resetVertices()},s.onActivate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()},s.onShow=function(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0},s.onHide=function(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1},s.reset=function(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1},s._resetVertices=function(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]},s._startSketch=function(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>this._stopSketch()))},s._stopSketch=function(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((({manipulator:e})=>{e.interactive=!0})),this._drawActive=!1,this.finishToolCreation()},s._updateSketch=function(e){const t=this.view.spatialReference;if(t&&(!H(t)||_.isLoaded())){for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let r=this._vertices.length;r<e.length;r++){const[s,i]=e[r],a=E(new G({x:s,y:i,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(a);const o=L.createManipulatorDragEventPipeline(a,((e,t)=>{t.next(L.screenToMap(this.view)).next(L.dragGraphic(e.graphic,b.ViewingMode.Local)).next((()=>{const t=e.graphic.geometry;this._vertices[r].coord=[t.x,t.y],this._updateGraphics()}))}));this._vertices.push({manipulator:a,coord:[s,i],handle:o})}if(this._vertices.length){const r=this._vertices.length-1,s=this._vertices[r],[i,a]=e[r];s.coord[0]===i&&s.coord[1]===a||(s.coord=[i,a],s.manipulator.graphic.geometry=new G({x:i,y:a,spatialReference:t}));const o=this._drawActive?this._vertices[r].manipulator:null;this.manipulators.forEach((({manipulator:e})=>{e.interactive=null==o||e!==o}))}this._updateGraphics()}},s._updateGraphics=function(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=z(this._vertices.map((({coord:e})=>e)),this.view.spatialReference,this.geodesicDistanceThreshold);if(!e)return;const{measurement:t,fillGeometry:r,outlineGeometry:s}=e;this._set("measurement",t);const a=t?I(this.messages,t,this.unit):null;if(this._set("measurementLabel",a),!r&&!s)return;let o,l,c;const{graphics:m}=this._measurementLayer;3===m.length?(o=m.at(0),l=m.at(1),c=m.at(2)):(o=new i({symbol:new k({color:n.getAccentColor(.3),outline:null})}),l=new i({symbol:new q({color:n.getAccentColor(),width:2})}),c=new i({symbol:new j({color:n.getTextColor(),font:new x({size:14,family:"sans-serif"}),haloColor:n.getTextHaloColor(.5),haloSize:2})}),m.removeAll(),m.addMany([o,l,c])),o.geometry=r,l.geometry=s,c.geometry=r?.centroid,c.symbol.text=a?.area??""},t._createClass(r,[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(e){this._set("editable",e),e||this._draw.reset()}}]),r}(D.InteractiveToolBase),r.__decorate([p.property()],e.AreaMeasurement2DTool.prototype,"_drawActive",void 0),r.__decorate([p.property({readOnly:!0})],e.AreaMeasurement2DTool.prototype,"cursor",null),r.__decorate([p.property({value:!0})],e.AreaMeasurement2DTool.prototype,"editable",null),r.__decorate([p.property({type:Number})],e.AreaMeasurement2DTool.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([p.property({readOnly:!0})],e.AreaMeasurement2DTool.prototype,"measurement",void 0),r.__decorate([p.property({readOnly:!0})],e.AreaMeasurement2DTool.prototype,"measurementLabel",void 0),r.__decorate([p.property()],e.AreaMeasurement2DTool.prototype,"messages",void 0),r.__decorate([p.property()],e.AreaMeasurement2DTool.prototype,"unit",void 0),r.__decorate([p.property({constructOnly:!0})],e.AreaMeasurement2DTool.prototype,"view",void 0),e.AreaMeasurement2DTool=r.__decorate([f.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],e.AreaMeasurement2DTool),e.createAreaMeasurementInfo2D=z,e.createAreaMeasurementLabel=I,e.isProjectionEngineRequired=H,e.isSupported=B,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
