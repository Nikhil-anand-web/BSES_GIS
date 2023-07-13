/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/support/ray","../../../ViewingMode","./IntersectorInterfaces","./IntersectorTarget","./intersectorUtils","./verticalOffsetUtils"],(function(t,r,e,i,s,n,a,o,c,h,l,d,u,f){"use strict";const y=1e-5;let p=function(){function t(t){this.options=new l.IntersectorOptions,this._results=new g,this.transform=new f.IntersectorTransform,this.tolerance=y,this.verticalOffset=null,this._ray=c.create(),this._rayEnd=n.create(),this._rayBeginTransformed=n.create(),this._rayEndTransformed=n.create(),this.viewingMode=t??h.ViewingMode.Global}var e=t.prototype;return e.reset=function(t,r,e){this.resetWithRay(c.fromPoints(t,r,this._ray),e)},e.resetWithRay=function(t,r){this.camera=r,t!==this._ray&&c.copy(t,this._ray),0!==this.options.verticalOffset?this.viewingMode===h.ViewingMode.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,s.add(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)},e.intersect=function(t=null,r,e,i,s){this.point=r,this.filterPredicate=i,this.tolerance=e??y;const n=f.getVerticalOffsetObject3D(this.verticalOffset);if(t&&t.length>0){const r=s?t=>{s(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const e of t){const t=e.getSpatialQueryAccelerator&&e.getSpatialQueryAccelerator();null!=t?(null!=n?t.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,r,n):t.forEachAlongRay(this._ray.origin,this._ray.direction,r),this.options.selectionMode&&this.options.hud&&t.forEachDegenerateObject(r)):e.objects.forAll((t=>r(t)))}}this.sortResults()},e.intersectObject=function(t){const r=t.geometries;if(!r)return;const e=t.shaderTransformation,n=f.getVerticalOffsetObject3D(this.verticalOffset);for(const a of r){if(!a.visible)continue;const{material:r,id:o}=a;this.transform.setAndInvalidateLazyTransforms(e,a.shaderTransformation),s.transformMat4(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),s.transformMat4(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const c=this.transform.transform;null!=n&&(n.objectTransform=this.transform),r.intersect(a,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((r,e,s,n,a,h)=>{if(r>=0){if(null!=this.filterPredicate&&!this.filterPredicate(this._ray.origin,this._rayEnd,r))return;const u=n?this._results.hud:this._results,f=n?n=>{const c=new d.HudTarget(t,o,s,h);n.set(l.IntersectorType.HUD,c,r,e,i.IDENTITY,a)}:i=>i.set(l.IntersectorType.OBJECT,{object:t,geometryId:o,triangleNr:s},r,e,c,a);if((null==u.min.drapedLayerOrder||a>=u.min.drapedLayerOrder)&&(null==u.min.dist||r<u.min.dist)&&f(u.min),this.options.store!==l.StoreResults.MIN&&(null==u.max.drapedLayerOrder||a<u.max.drapedLayerOrder)&&(null==u.max.dist||r>u.max.dist)&&f(u.max),this.options.store===l.StoreResults.ALL)if(n){const t=new O(this._ray);f(t),this._results.hud.all.push(t)}else{const t=new _(this._ray);f(t),this._results.all.push(t)}}}))}},e.sortResults=function(t=this._results.all){t.sort(((t,r)=>t.dist!==r.dist?(t.dist??0)-(r.dist??0):t.drapedLayerOrder!==r.drapedLayerOrder?(t.drapedLayerOrder??Number.MAX_VALUE)-(r.drapedLayerOrder??Number.MAX_VALUE):(r.drapedLayerGraphicOrder??Number.MIN_VALUE)-(t.drapedLayerGraphicOrder??Number.MIN_VALUE)))},r._createClass(t,[{key:"results",get:function(){return this._results}},{key:"ray",get:function(){return this._ray}},{key:"rayBegin",get:function(){return this._ray.origin}},{key:"rayEnd",get:function(){return this._rayEnd}}]),t}();function m(t){return new p(t)}let g=function(){function t(){this.min=new _(c.create()),this.max=new _(c.create()),this.hud={min:new O(c.create()),max:new O(c.create()),all:new Array},this.ground=new _(c.create()),this.all=[]}return t.prototype.init=function(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0},r._createClass(t)}(),_=function(){var t=o.prototype;function o(t){this.intersector=l.IntersectorType.OBJECT,this.normal=n.create(),this.transformation=i.create(),this._ray=c.create(),this.init(t)}return t.getIntersectionPoint=function(t){return!!u.isValidIntersectorResult(this)&&(s.scale(L,this.ray.direction,this.dist),s.add(t,this.ray.origin,L),!0)},t.getTransformedNormal=function(t){return s.copy(I,this.normal),I[3]=0,a.transformMat4(I,I,this.transformation),s.copy(t,I),s.normalize(t,t)},t.init=function(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=l.IntersectorType.OBJECT,c.copy(t,this._ray)},t.set=function(t,r,a,o,c,h,l){this.intersector=t,this.dist=a,s.copy(this.normal,o??n.UNIT_Z),e.copy(this.transformation,c??i.IDENTITY),this.target=r,this.drapedLayerOrder=h,this.drapedLayerGraphicOrder=l},t.copy=function(t){c.copy(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,s.copy(this.normal,t.normal),e.copy(this.transformation,t.transformation)},r._createClass(o,[{key:"ray",get:function(){return this._ray}},{key:"distanceInRenderSpace",get:function(){return null!=this.dist?(s.scale(L,this.ray.direction,this.dist),s.length(L)):null}}]),o}(),O=function(t){function e(){var r;return(r=t.apply(this,arguments)||this).intersector=l.IntersectorType.HUD,r}return r._inherits(e,t),r._createClass(e)}(_);function T(t){return new _(t)}const L=n.create(),I=o.create();t.DEFAULT_TOLERANCE=y,t.newIntersector=m,t.newIntersectorResult=T,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));