/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../core/Accessor","../../../../core/arrayUtils","../../../../core/Logger","../../../../core/mathUtils","../../../../core/maybeUpdating","../../../../core/reactiveUtils","../../../../core/unitUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3","../../../../core/sql/WhereClause","../../../../geometry/ellipsoidUtils","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/DoubleArray","../../../../geometry/support/Ellipsoid","../../../../geometry/support/spatialReferenceUtils","../../../../chunks/sphere","../../../../geometry/support/webMercatorUtils","../../../../layers/support/FeatureFilter","./I3SUtil","../../../../geometry/SpatialReference"],(function(e,t,r,i,n,o,s,a,l,c,p,u,d,g,y,h,f,m,S,w,_,F,b,R,E,M,I,v,j,k){"use strict";const V="esri.views.3d.layers.i3s.I3SMeshViewFilter",T=a.getLogger(V);t.I3SMeshViewFilter=function(t){function i(e){var r;return(r=t.call(this,e)||this)._projectionEngineLoaded=!1,r}r._inherits(i,t);var n=i.prototype;return n.initialize=function(){p.whenOnce((()=>this.viewFilter?.geometry||null!=this.layerFilter)).then((()=>this.loadAsyncModule(new Promise(((t,r)=>e(["../../../../geometry/geometryEngine"],t,r))).then((e=>{this.destroyed||(this._geometryEngine=e)})))))},n.addFilters=function(e,t,r,i){const n=this.sortedObjectIds;null!=n&&e.push((e=>j.objectIdFilter(n,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const o=c.unwrapUpdating(this._layerMaskGeometries),s=this._geometryEngine;if(null!=o&&null!=this.layerFilter&&null!=s){const n=this.layerFilter.spatialRelationship;e.push(((e,a)=>O(s,e,a,i,t,r,o,n)))}const a=c.unwrapUpdating(this._viewMaskGeometries);if(null!=a&&null!=this.viewFilter&&null!=s){const n=this.viewFilter.spatialRelationship;e.push(((e,o)=>O(s,e,o,i,t,r,a,n)))}},n.isMBSGeometryVisible=function(e,t,r){const i=c.unwrapUpdating(this._layerMaskGeometries),n=this._geometryEngine;if(null!=i&&null!=this.layerFilter&&null!=n){const o=this.layerFilter.spatialRelationship,s=i[0].spatialReference||t;if(!w.projectBoundingSphere(e,r,x,s))return T.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0;return U(n,x,i,s,o)}const o=c.unwrapUpdating(this._viewMaskGeometries);if(null!=o&&null!=this.viewFilter&&null!=n){const i=this.viewFilter.spatialRelationship,s=o[0].spatialReference||t;if(!w.projectBoundingSphere(e,r,x,s))return T.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0;return U(n,x,o,s,i)}return!0},i.checkSupport=function(e){return null!=e&&(e.timeExtent?(T.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!C(e.spatialRelationship)||(T.warn(`Filters with spatialRelationship other than ${D.join(", ")} are not supported for mesh scene layers`),!1))},r._createClass(i,[{key:"sortedObjectIds",get:function(){if(null==this.viewFilter||null==this.viewFilter.objectIds)return null;const e=b.doubleArrayFrom(this.viewFilter.objectIds);return e.sort(),e}},{key:"parsedWhereClause",get:function(){const e=null!=this.viewFilter?this.viewFilter.where:null;if(null==e||!e)return null;try{return m.WhereClause.create(e,this.layerFieldsIndex)}catch(t){T.error(`Failed to parse filter where clause: ${t}`)}return null}},{key:"parsedGeometry",get:function(){const e=c.unwrapUpdating(this._viewMaskGeometries),t=c.unwrapUpdating(this._layerMaskGeometries);return null==e||null==t?e||t:t.concat(e)}},{key:"_layerMaskGeometries",get:function(){const e=this.layerFilter;return null==e?null:null==this._geometryEngine?c.updating:"disjoint"===e.spatialRelationship?e.geometries.map((e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}}))):[e.geometries.reduce(((e,t)=>(e.rings=[...e.rings,...t.rings],e)),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}},{key:"_viewMaskGeometries",get:function(){if(null==this.viewFilter)return null;const{geometry:e}=this.viewFilter;if(null==e)return null;if(null==this.viewFilter||null==this._geometryEngine)return c.updating;const{distance:t,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n="mesh"===e.type?e.extent:e;if(null==t||0===t)return A(this._geometryEngine,n,i);const o=r||u.getUnitString(n.spatialReference);if(n.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(n,t,o);return A(this._geometryEngine,e,i)}const s=I.project(n,k.WGS84);if(null!=s){const e=I.project(this._geometryEngine.geodesicBuffer(s,t,o),n.spatialReference);return A(this._geometryEngine,e,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(w.load().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let a=null;try{a=w.project(n,k.WGS84)}catch(l){}if(a)try{a=w.project(this._geometryEngine.geodesicBuffer(a,t,o),n.spatialReference)}catch(l){a=null}return a||T.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),A(this._geometryEngine,a,i)}},{key:"updating",get:function(){return c.isUpdating(this._layerMaskGeometries)||c.isUpdating(this._viewMaskGeometries)}}]),i}(o),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"layerFilter",void 0),i.__decorate([d.property({type:v})],t.I3SMeshViewFilter.prototype,"viewFilter",void 0),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"layerFieldsIndex",void 0),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"loadAsyncModule",void 0),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"addSqlFilter",void 0),i.__decorate([d.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"sortedObjectIds",null),i.__decorate([d.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"parsedWhereClause",null),i.__decorate([d.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"parsedGeometry",null),i.__decorate([d.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"_layerMaskGeometries",null),i.__decorate([d.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"_viewMaskGeometries",null),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"updating",null),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"_projectionEngineLoaded",void 0),i.__decorate([d.property()],t.I3SMeshViewFilter.prototype,"_geometryEngine",void 0),t.I3SMeshViewFilter=i.__decorate([h.subclass(V)],t.I3SMeshViewFilter);const D=(e=>e)(["contains","intersects","disjoint"]);function C(e){return null!=e&&D.includes(e)}var G;function A(e,t,r){if(null==t)return null;if("disjoint"===r&&"polygon"===t.type){const r=t.rings.length,i=t.spatialReference,n=new Array(r);for(let e=0;e<r;++e){const r=F.fromValues(1/0,1/0,-1/0,-1/0);F.expandWithNestedArray(r,t.rings[e]),n[e]={type:"polygon",rings:[t.rings[e]],spatialReference:i,cache:{},aabr:r}}n.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const o=new Set,a=new s.PositionHint;for(let t=0;t<n.length;++t){const r=n[t],i=r.aabr[0];o.forEach((t=>{if(i>=t.aabr[2])return void o.delete(t);if(r.aabr[1]>t.aabr[3]||r.aabr[3]<t.aabr[1]||!e.intersects(r,t))return;r.rings=r.rings.concat(t.rings),F.expand(r.aabr,t.aabr,r.aabr),r.cache={},o.delete(t);const l=s.indexOf(n,t,n.length,a);n.splice(l,1)})),o.add(r)}for(const e of n)e.aabr=void 0;return n}return[t]}function U(e,t,r,i,n){if(t[3]>=.5*(t[2]+S.getReferenceEllipsoid(i).radius))return!0;const o=P(e,t,i);return r.every((t=>W(e,t,o,n)!==G.DISCARD))}function O(e,t,r,i,n,o,s,a){const l=s[0].spatialReference||n.spatialReference;if(!w.projectBoundingSphere(r.node.mbs,o,x,l))return void T.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=P(e,x,l),p=B(a,n,l,i,r.objectHandle);for(const u of s){if(0===t.length)return;switch(W(e,u,c,a)){case G.DISCARD:return void(t.length=0);case G.KEEP:continue}j.filterInPlace(t,r.featureIds,(t=>q(e,u,t,p)))}}!function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"}(G||(G={}));const x=M.fromValues(0,0,0,0);function B(e,t,r,i,n){const o=t.renderSpatialReference,s=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let c,p;switch(e){case"intersects":c=(e,t,r)=>e.intersects(t,r)?G.KEEP:G.TEST,p=L;break;case"contains":c=(e,t,r)=>e.contains(t,r)?G.TEST:G.DISCARD,p=L;break;default:c=(e,t,r)=>e.disjoint(t,r)?G.TEST:G.DISCARD,p=K}return{collection:i,object:n,type:e,maskSR:r,renderSR:o,aabbCache:s,triangle:a,positions:l,triangleTest:c,geometryTest:p}}function P(e,t,r){const i={type:"point",x:t[0],y:t[1],hasZ:!1,hasM:!1,spatialReference:r},n=!E.isWGS84(r)&&!E.isWebMercator(r),o=Number.isNaN(t[3])?0:l.clamp(t[3],0,2*R.earth.radius),s=n?e.buffer(i,o,1):e.geodesicBuffer(i,o,1);return s.type="polygon",s}function W(e,t,r,i){switch(i){case"intersects":case"contains":return L(e,t,r);case"disjoint":return K(e,t,r)}}function L(e,t,r){return e.intersects(t,r)?e.contains(t,r)?G.KEEP:G.TEST:G.DISCARD}function K(e,t,r){return e.intersects(t,r)?e.contains(t,r)?G.DISCARD:G.TEST:G.KEEP}function q(e,t,r,i){const{collection:n,object:o,renderSR:s,maskSR:a,geometryTest:l,aabbCache:c}=i;let p=c.get(r);if(!p){const e=n.getObjectTransform(o);n.getComponentAabb(o,r,N);const t=[[N[0],N[1],0],[N[0],N[4],0],[N[3],N[4],0],[N[3],N[1],0]];for(let r=0;r<4;++r)f.transformMat3(t[r],t[r],e.rotationScale),f.add(t[r],t[r],e.position),w.projectVectorToVector(t[r],s,t[r],a);p={type:"polygon",rings:[t],spatialReference:a,cache:{}},p.rings[0][4]=p.rings[0][0],c.set(r,p)}switch(l(e,t,p)){case G.DISCARD:return!1;case G.KEEP:return!0}const{triangle:u,triangleTest:d,positions:g}=i,y=u.rings[0][0],h=u.rings[0][1],m=u.rings[0][2],S=n.getObjectTransform(o);n.getComponentPositions(o,r,g);const{indices:_,data:F,stride:b,startIndex:R,endIndex:E}=g;for(let M=R;M<E;M+=3){const r=b*_[M],i=b*_[M+1],n=b*_[M+2];switch(f.set(y,F[r],F[r+1],F[r+2]),f.set(h,F[i],F[i+1],F[i+2]),f.set(m,F[n],F[n+1],F[n+2]),f.transformMat3(y,y,S.rotationScale),f.transformMat3(h,h,S.rotationScale),f.transformMat3(m,m,S.rotationScale),f.add(y,y,S.position),f.add(h,h,S.position),f.add(m,m,S.position),w.projectVectorToVector(y,s,y,a),w.projectVectorToVector(h,s,h,a),w.projectVectorToVector(m,s,m,a),d(e,t,u)){case G.DISCARD:return!1;case G.KEEP:return!0}}return"intersects"!==i.type}const N=_.create();Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));