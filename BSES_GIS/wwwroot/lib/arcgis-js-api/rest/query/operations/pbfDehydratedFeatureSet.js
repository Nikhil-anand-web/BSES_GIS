/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/compilerUtils","../../../core/uid","../../../geometry/SpatialReference","../../../geometry/support/zscale","../../../layers/graphics/dehydratedFeatures","../../../layers/graphics/featureConversionUtils","../../../layers/support/Field"],(function(t,e,r,n,o,i,s,a,u){"use strict";function h(t,e){return e}function c(t,e,r,n){switch(r){case 0:return p(t,e+n,0);case 1:return"lowerLeft"===t.originPosition?p(t,e+n,1):y(t,e+n,1)}}function l(t,e,r,n){return 2===r?p(t,e,2):c(t,e,r,n)}function d(t,e,r,n){return 2===r?p(t,e,3):c(t,e,r,n)}function f(t,e,r,n){return 3===r?p(t,e,3):l(t,e,r,n)}function p({translate:t,scale:e},r,n){return t[n]+r*e[n]}function y({translate:t,scale:e},r,n){return t[n]-r*e[n]}let _=function(){function t(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=h,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=function(){function t(){}return e._createClass(t)}()}var p=t.prototype;return p.createFeatureResult=function(){return new s.DehydratedFeatureSetClass},p.finishFeatureResult=function(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=function(){function t(){}return e._createClass(t)}(),this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const r=i.getGeometryZScaler(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=r)for(const e of t.features)r(e.geometry)},p.createSpatialReference=function(){return new o},p.addField=function(t,e){t.fields.push(u.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}},p.addFeature=function(t,e){const r=this._options.maxStringAttributeLength??0;if(r>0)for(const n in e.attributes){const t=e.attributes[n];"string"==typeof t&&t.length>r&&(e.attributes[n]="")}t.features.push(e)},p.addQueryGeometry=function(t,e){const{queryGeometry:r,queryGeometryType:n}=e,o=a.unquantizeOptimizedGeometry(r.clone(),r,!1,!1,this._transform),i=a.convertToGeometry(o,n,!1,!1);let s=null;switch(n){case"esriGeometryPoint":s="point";break;case"esriGeometryPolygon":s="polygon";break;case"esriGeometryPolyline":s="polyline";break;case"esriGeometryMultipoint":s="multipoint"}i.type=s,t.queryGeometryType=n,t.queryGeometry=i},p.prepareFeatures=function(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:r.neverReached(t.geometryType)}},p.createFeature=function(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new s.DehydratedFeatureClass(n.generateUID(),null,new this._attributesConstructor)},p.allocateCoordinates=function(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0},p.addLength=function(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)},p.createPointGeometry=function(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e},p.addCoordinatePoint=function(t,e,r){const n=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=n)switch(r){case 0:t.x=n;break;case 1:t.y=n;break;case 2:t.hasZ?t.z=n:t.m=n;break;case 3:t.m=n}},p._transformPathLikeValue=function(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t},p._addCoordinatePolyline=function(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)},p._addCoordinatePolygon=function(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)},p._addCoordinateMultipoint=function(t,e,r){0===r&&t.points.push([]);const n=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)},p._createPolygonGeometry=function(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},p._createPolylineGeometry=function(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},p._createMultipointGeometry=function(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},p._dehydratedAddPointsCoordinate=function(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(e,r),o=t[t.length-1],i=this._coordinateBuffer;if(i){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(i.buffer,t,this._vertexDimension))}i[this._coordinateBufferPtr++]=n}},p._deriveApplyTransform=function(t){const{hasZ:e,hasM:r}=t;return e&&r?f:e?l:r?d:c},e._createClass(t)}();t.DehydratedFeatureSetParserContext=_,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));