/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Handles","../../../../core/Logger","../../../../core/maybe","../../../../core/quantityUtils","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/geometryEngine","../../../../geometry/Polyline","../../../../geometry/projection","../../../../geometry/spatialReferenceEllipsoidUtils","../../../../geometry/support/geodesicUtils","../interfaces","../support/projectionUtils","../support/UnitNormalizer"],(function(e,t,i,n,r,o,a,s,c,l,u,p,d,h,m,v,y,_,P,g,D,f,w,S){"use strict";const C="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",M=o.getLogger(C),A=1e5;e.DirectLineMeasurementController=function(e){function i(t){var i;return(i=e.call(this,t)||this)._unitNormalizer=new S.UnitNormalizer,i._handles=new r,i._tempStartPosition=v.create(),i._tempEndPosition=v.create(),i._tempCornerPosition=v.create(),i}t._inherits(i,e);var n=i.prototype;return n.initialize=function(){const e=this.view.spatialReference,t=g.getSphericalPCPF(e),i=t===g.SphericalECEFSpatialReference?g.WGS84ECEFSpatialReference:t;this._sphericalPCPF=i;const n=P.canProjectWithoutEngine(e,i);this._unitNormalizer.spatialReference=n?i:e,this._handles.add([c.watch((()=>({viewData:this.viewData,startPoint:this.analysis.startPoint})),(({viewData:e,startPoint:t})=>{e.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(t)}),c.syncAndInitial),c.watch((()=>({viewData:this.viewData,endPoint:this.analysis.endPoint})),(({viewData:e,endPoint:t})=>{e.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(t)}),c.syncAndInitial),c.watch((()=>({result:this._computedResult,viewData:this.viewData})),(({result:e,viewData:t})=>{t.result=e}),c.syncAndInitial)])},n.destroy=function(){this._handles=a.destroyMaybe(this._handles)},n._applyProjectionAndElevationAlignment=function(e){if(null==e)return e;const{spatialReference:t,elevationProvider:i}=this.view,n=w.applyProjectionAndElevationAlignment(e,t,i);return n??(w.logFailedGeometryProjectionError(this.analysis,e.spatialReference,M),null)},n._euclideanDistances=function(e,t){const i=e.clone();i.z=t.z;const n=this._tempStartPosition,r=this._tempEndPosition,o=this._tempCornerPosition,a=this.view.spatialReference,c=this._sphericalPCPF,l=P.canProjectWithoutEngine(a,c)?c:a;P.projectPointToVector(e,n,l),P.projectPointToVector(t,r,l),P.projectPointToVector(i,o,l);const u=m.distance(n,r),p=m.distance(o,r),d=Math.abs(t.z-e.z),h=e=>this._unitNormalizer.normalizeDistance(e),v=h(u),y=h(p),_=h(d);return{direct:s.createQuantity(v,"meters"),horizontal:s.createQuantity(y,"meters"),vertical:s.createQuantity(_,"meters")}},n._geodesicDistance=function(e,t,i){const n=e.spatialReference,r=new _({spatialReference:n});r.addPath([e,t]);const o=n.isGeographic&&D.isSupported(n)?D.geodesicLengths([r],"meters")[0]:n.isWebMercator?y.geodesicLength(r,"meters"):null,a=null!=o?o:this._fallbackGeodesicDistance(e,t,i);return s.createQuantity(a,"meters")},n._fallbackGeodesicDistance=function(e,t,i){if(P.projectPointToWGS84ComparableLonLat(e,E)&&P.projectPointToWGS84ComparableLonLat(t,L)){const e=new D.InverseGeodeticSolverResult;return D.inverseGeodeticSolver(e,E,L),e.distance}return i},t._createClass(i,[{key:"_computedResult",get:function(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(null==e||null==t)return null;const n=this._euclideanDistances(e,t),r=this._geodesicDistance(e,t,n.horizontal.value),o=i===f.MeasurementMode.Geodesic||i===f.MeasurementMode.Auto&&n.horizontal.value>A?"geodesic":"euclidean";return{mode:o,distance:"euclidean"===o?n.direct:r,directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:r}}}]),i}(n),i.__decorate([l.property()],e.DirectLineMeasurementController.prototype,"view",void 0),i.__decorate([l.property()],e.DirectLineMeasurementController.prototype,"analysis",void 0),i.__decorate([l.property()],e.DirectLineMeasurementController.prototype,"viewData",void 0),i.__decorate([l.property()],e.DirectLineMeasurementController.prototype,"_computedResult",null),e.DirectLineMeasurementController=i.__decorate([h.subclass(C)],e.DirectLineMeasurementController);const E=v.create(),L=v.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));